package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.OrderDetails;
import com.example.demo.repository.OrderDetailsRepository;

@Service
public class OrderDetailsService {

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    public OrderDetails saveOrderDetails(OrderDetails orderDetails) {
        return orderDetailsRepository.save(orderDetails);
    }

    public List<OrderDetails> getAllOrders() {
        return orderDetailsRepository.findAll();
    }

    public OrderDetails getOrderById(Long order_id) {
        return orderDetailsRepository.findById(order_id).orElse(null);
    }

    public void deleteOrder(Long order_id) {
        orderDetailsRepository.deleteById(order_id);
    }
}
