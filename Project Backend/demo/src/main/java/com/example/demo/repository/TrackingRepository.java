package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Tracking;

public interface TrackingRepository extends JpaRepository<Tracking, Integer> {
}
