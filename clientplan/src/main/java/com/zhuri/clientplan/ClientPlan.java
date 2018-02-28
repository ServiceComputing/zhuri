package com.zhuri.clientplan;

import java.util.ArrayList;

public class ClientPlan {
    private int id;
    private ArrayList<Data> data;
    private ArrayList<Link> links;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ArrayList<Data> getData() {
        return data;
    }

    public void setData(ArrayList<Data> data) {
        this.data = data;
    }

    public ArrayList<Link> getLinks() {
        return links;
    }

    public void setLinks(ArrayList<Link> links) {
        this.links = links;
    }
}
