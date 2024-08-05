package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Payment;
import com.example.demo.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(int orderId) {
        return paymentRepository.findById(orderId).orElse(null);
    }

    public Payment updatePayment(int orderId, Payment paymentDetails) {
        Payment payment = paymentRepository.findById(orderId).orElse(null);
        if (payment != null) {
            payment.setPrice(paymentDetails.getPrice());
            payment.setPaymentmethod(paymentDetails.getPaymentmethod());
            return paymentRepository.save(payment);
        }
        return null;
    }

    public void deletePayment(int orderId) {
        paymentRepository.deleteById(orderId);
    }
}
