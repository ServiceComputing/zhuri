package com.zhuri.clientplan;

import java.util.List;

public class DataTables<T> {
    // 请求序号（DataTables强烈建议将此参数强制转换为int型，以阻止可能的XSS攻击）
    private Integer draw;
    // 过滤之前的总数据量
    private Integer recordsTotal;
    // 过滤之后的总数据量
    private Integer recordsFiltered;
    //需要在表格中显示的数据
    private List<T> data;
    //错误信息，可选参数
    private String error;

    public DataTables(Integer draw, Integer recordsTotal, Integer recordsFiltered, List<T> data, String error) {
        this.draw = draw;
        this.recordsTotal = recordsTotal;
        this.recordsFiltered = recordsFiltered;
        this.data = data;
        this.error = error;
    }

    public Integer getDraw() {
        return draw;
    }

    public void setDraw(Integer draw) {
        this.draw = draw;
    }

    public Integer getRecordsTotal() {
        return recordsTotal;
    }

    public void setRecordsTotal(Integer recordsTotal) {
        this.recordsTotal = recordsTotal;
    }

    public Integer getRecordsFiltered() {
        return recordsFiltered;
    }

    public void setRecordsFiltered(Integer recordsFiltered) {
        this.recordsFiltered = recordsFiltered;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
