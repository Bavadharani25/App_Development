package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Tracking;
import com.example.demo.service.TrackingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tracking")
public class TrackingController {

    @Autowired
    private TrackingService trackingService;

    @PostMapping
    public Tracking createTracking(@RequestBody Tracking tracking) {
        return trackingService.saveTracking(tracking);
    }

    @GetMapping
    public List<Tracking> getAllTrackings() {
        return trackingService.getAllTrackings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tracking> getTrackingById(@PathVariable int id) {
        Optional<Tracking> tracking = trackingService.getTrackingById(id);
        return tracking.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tracking> updateTracking(@PathVariable int id, @RequestBody Tracking trackingDetails) {
        Optional<Tracking> trackingOptional = trackingService.getTrackingById(id);
        if (trackingOptional.isPresent()) {
            Tracking tracking = trackingOptional.get();
            tracking.setShippingsoon(trackingDetails.getShippingsoon());
            tracking.setShipped(trackingDetails.getShipped());
            tracking.setOntheway(trackingDetails.getOntheway());
            tracking.setOutfordelivery(trackingDetails.getOutfordelivery());
            tracking.setDelivered(trackingDetails.getDelivered());
            return ResponseEntity.ok(trackingService.updateTracking(tracking));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTracking(@PathVariable int id) {
        Optional<Tracking> trackingOptional = trackingService.getTrackingById(id);
        if (trackingOptional.isPresent()) {
            trackingService.deleteTracking(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
