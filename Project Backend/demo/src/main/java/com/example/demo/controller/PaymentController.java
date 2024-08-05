package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Payment;
import com.example.demo.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public Payment createPayment(@RequestBody Payment payment) {
        return paymentService.savePayment(payment);
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{orderId}")
    public Payment getPaymentById(@PathVariable int orderId) {
        return paymentService.getPaymentById(orderId);
    }

    @PutMapping("/{orderId}")
    public Payment updatePayment(@PathVariable int orderId, @RequestBody Payment paymentDetails) {
        return paymentService.updatePayment(orderId, paymentDetails);
    }

    @DeleteMapping("/{orderId}")
    public void deletePayment(@PathVariable int orderId) {
        paymentService.deletePayment(orderId);
    }
}
