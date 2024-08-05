package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Tracking;
import com.example.demo.repository.TrackingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TrackingService {

    @Autowired
    private TrackingRepository trackingRepository;

    public Tracking saveTracking(Tracking tracking) {
        return trackingRepository.save(tracking);
    }

    public List<Tracking> getAllTrackings() {
        return trackingRepository.findAll();
    }

    public Optional<Tracking> getTrackingById(int trackId) {
        return trackingRepository.findById(trackId);
    }

    public Tracking updateTracking(Tracking tracking) {
        return trackingRepository.save(tracking);
    }

    public void deleteTracking(int trackId) {
        trackingRepository.deleteById(trackId);
    }
}
