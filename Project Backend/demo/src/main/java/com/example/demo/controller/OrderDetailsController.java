package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.OrderDetails;
import com.example.demo.service.OrderDetailsService;

@RestController
@RequestMapping("/orders")
public class OrderDetailsController {

    @Autowired
    private OrderDetailsService orderDetailsService;

    @PostMapping
    public ResponseEntity<OrderDetails> createOrder(@RequestBody OrderDetails orderDetails) {
        OrderDetails savedOrder = orderDetailsService.saveOrderDetails(orderDetails);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<OrderDetails>> getAllOrders() {
        List<OrderDetails> orders = orderDetailsService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{order_id}")
    public ResponseEntity<OrderDetails> getOrderById(@PathVariable Long order_id) {
        OrderDetails order = orderDetailsService.getOrderById(order_id);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @DeleteMapping("/{order_id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long order_id) {
        orderDetailsService.deleteOrder(order_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
