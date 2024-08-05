package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tracking {
    @Id
    private int track_id;
    
    private String shippingsoon;
    private String shipped;
    private String ontheway;
    private String outfordelivery;
    private String delivered;

    public int getTrack_id() {
        return track_id;
    }
    public void setTrack_id(int track_id) {
        this.track_id = track_id;
    }
    public String getShippingsoon() {
        return shippingsoon;
    }
    public void setShippingsoon(String shippingsoon) {
        this.shippingsoon = shippingsoon;
    }
    public String getShipped() {
        return shipped;
    }
    public void setShipped(String shipped) {
        this.shipped = shipped;
    }
    public String getOntheway() {
        return ontheway;
    }
    public void setOntheway(String ontheway) {
        this.ontheway = ontheway;
    }
    public String getOutfordelivery() {
        return outfordelivery;
    }
    public void setOutfordelivery(String outfordelivery) {
        this.outfordelivery = outfordelivery;
    }
    public String getDelivered() {
        return delivered;
    }
    public void setDelivered(String delivered) {
        this.delivered = delivered;
    }
    
}
