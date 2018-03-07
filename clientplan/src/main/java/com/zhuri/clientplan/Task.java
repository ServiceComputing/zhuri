package com.zhuri.clientplan;

import java.sql.Timestamp;

public class Task {
    private int id;
    /*private Timestamp start_date;
    private String text;
    private double progress;
    private int duration;
    private int parent;
    private String type;
    private boolean readonly;
    private boolean editable;
    private String owner;
    private String priority;
    private String stage;*/

    private String tasks;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTasks() {
        return tasks;
    }

    public void setTasks(String tasks) {
        this.tasks = tasks;
    }
}
