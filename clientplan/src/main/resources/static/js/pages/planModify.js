var demo_tasks = {
    "data": [
        { "id": 11, "text": "Project #1", "start_date": "28-03-2013", "duration": "11", "progress": 0.6, "open": true },
        { "id": 1, "text": "Project #2", "start_date": "01-04-2013", "duration": "18", "progress": 0.4, "open": true },

        { "id": 2, "text": "Task #1", "start_date": "02-04-2013", "duration": "8", "parent": "1", "progress": 0.5, "open": false },
        { "id": 3, "text": "Task #2", "start_date": "11-04-2013", "duration": "8", "parent": "1", "progress": 0.6, "open": true },
        { "id": 4, "text": "Task #3", "start_date": "13-04-2013", "duration": "6", "parent": "1", "progress": 0.5, "open": true },
        { "id": 5, "text": "Task #1.1", "start_date": "02-04-2013", "duration": "7", "parent": "2", "progress": 0.6, "open": true },
        { "id": 6, "text": "Task #1.2", "start_date": "03-04-2013", "duration": "7", "parent": "2", "progress": 0.6, "open": true },
        { "id": 7, "text": "Task #2.1", "start_date": "11-04-2013", "duration": "8", "parent": "3", "progress": 0.6, "open": true },
        { "id": 8, "text": "Task #3.1", "start_date": "14-04-2013", "duration": "5", "parent": "4", "progress": 0.5, "open": true },
        { "id": 9, "text": "Task #3.2", "start_date": "14-04-2013", "duration": "4", "parent": "4", "progress": 0.5, "open": true },
        { "id": 10, "text": "Task #3.3", "start_date": "14-04-2013", "duration": "3", "parent": "4", "progress": 0.5, "open": true },

        { "id": 12, "text": "Task #1", "start_date": "03-04-2013", "duration": "5", "parent": "11", "progress": 1, "open": true },
        { "id": 13, "text": "Task #2", "start_date": "02-04-2013", "duration": "7", "parent": "11", "progress": 0.5, "open": true },
        { "id": 14, "text": "Task #3", "start_date": "02-04-2013", "duration": "6", "parent": "11", "progress": 0.8, "open": true },
        { "id": 15, "text": "Task #4", "start_date": "02-04-2013", "duration": "5", "parent": "11", "progress": 0.2, "open": true },
        { "id": 16, "text": "Task #5", "start_date": "02-04-2013", "duration": "7", "parent": "11", "progress": 0, "open": true },

        { "id": 17, "text": "Task #2.1", "start_date": "03-04-2013", "duration": "2", "parent": "13", "progress": 1, "open": true },
        { "id": 18, "text": "Task #2.2", "start_date": "06-04-2013", "duration": "3", "parent": "13", "progress": 0.8, "open": true },
        { "id": 19, "text": "Task #2.3", "start_date": "10-04-2013", "duration": "4", "parent": "13", "progress": 0.2, "open": true },
        { "id": 20, "text": "Task #2.4", "start_date": "10-04-2013", "duration": "4", "parent": "13", "progress": 0, "open": true },
        { "id": 21, "text": "Task #4.1", "start_date": "03-04-2013", "duration": "4", "parent": "15", "progress": 0.5, "open": true },
        { "id": 22, "text": "Task #4.2", "start_date": "03-04-2013", "duration": "4", "parent": "15", "progress": 0.1, "open": true },
        { "id": 23, "text": "Task #4.3", "start_date": "03-04-2013", "duration": "5", "parent": "15", "progress": 0, "open": true }
    ],
    "links": [
        { "id": "1", "source": "1", "target": "2", "type": "1" },
        { "id": "2", "source": "2", "target": "3", "type": "0" },
        { "id": "3", "source": "3", "target": "4", "type": "0" },
        { "id": "4", "source": "2", "target": "5", "type": "2" },
        { "id": "5", "source": "2", "target": "6", "type": "2" },
        { "id": "6", "source": "3", "target": "7", "type": "2" },
        { "id": "7", "source": "4", "target": "8", "type": "2" },
        { "id": "8", "source": "4", "target": "9", "type": "2" },
        { "id": "9", "source": "4", "target": "10", "type": "2" },
        { "id": "10", "source": "11", "target": "12", "type": "1" },
        { "id": "11", "source": "11", "target": "13", "type": "1" },
        { "id": "12", "source": "11", "target": "14", "type": "1" },
        { "id": "13", "source": "11", "target": "15", "type": "1" },
        { "id": "14", "source": "11", "target": "16", "type": "1" },
        { "id": "15", "source": "13", "target": "17", "type": "1" },
        { "id": "16", "source": "17", "target": "18", "type": "0" },
        { "id": "17", "source": "18", "target": "19", "type": "0" },
        { "id": "18", "source": "19", "target": "20", "type": "0" },
        { "id": "19", "source": "15", "target": "21", "type": "2" },
        { "id": "20", "source": "15", "target": "22", "type": "2" },
        { "id": "21", "source": "15", "target": "23", "type": "2" }
    ]
};

var add_flag = 0;
var id = 0;
var type = 0;
var text = "";
var save_user = 0;

var templateTable;
var templateSelectedId = 0;

function reset_Gantt_sizes ()
{
    $(".main").css("height", $(".sidebar").height() - 1);
    $("#gantt").css("height", $(".main").height() - $(".breadcrumb").height() - 24);
    gantt.setSizes();
}

function templateTableInit ()
{
    $("#checkPlanDataTemplate").dataTable({
        "searching": false,
        "aLengthMenu": [10, 20, 25, 50],
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "/getTemplatePlansByUserId",
            "type": "GET",
            // "data": { "pageNum": 1, "pageSize": 100 },
            "dataType": "json",
            // "dataSrc": "rows"
        },
        "columns": [
            { "data": "id" },
            { "data": "id" },
            { "data": "status" },
            { "data": "text" },
        ],
        select: {
            info: false,
            style: 'single',
            selector: 'td:first-child'
        },
        "columnDefs": [
            {
                orderable: false,
                className: 'select-checkbox',
                targets: 0,
                render: function (data, type, row) {
                    return null;
                }
            },
            {
                "targets": 2,
                "render": function (data, type, row) {
                    var htmlContent = '';
                    console.log(data);
                    switch (data) {
                        case 'Active':
                            htmlContent = '<td><span class="badge badge-success">' + 'Active' + '</span></td>';
                            break;
                        case 'Finished':
                            htmlContent = '<td><span class="badge badge-primary">' + 'Finished' + '</span></td>';
                            break;
                        case 'Stopped':
                            htmlContent = '<td><span class="badge badge-danger">' + 'Stopped' + '</span></td>';
                            break;
                        case 'Pending':
                            htmlContent = '<td><span class="badge badge-warning">' + 'Pending' + '</span></td>';
                            break;
                        default:
                            break;
                    };
                    return htmlContent;
                }
            }
        ]
    });
    templateTable = $("#checkPlanDataTemplate").DataTable()
}

function init_Gantt (gantt_data)
{
    gantt.config.xml_date = "%d-%m-%Y";
    gantt.config.scale_unit = "month";
    gantt.config.date_scale = "%F, %Y";
    gantt.config.scale_height = 50;
    gantt.config.subscales = [{
        unit: "day",
        step: 1,
        date: "%j, %D"
    }];
    gantt.config.undo = true;
    gantt.config.redo = true;
    gantt.templates.task_class = gantt.templates.grid_row_class = gantt.templates.task_row_class = function (start, end, task) {
        if (gantt.isSelectedTask(task.id))
            return "gantt_selected";
    };
    gantt.init("gantt");
    gantt.parse(gantt_data);
    reset_Gantt_sizes();
}

function main ()
{
    id = find_cookie("id");
    $("#basicInfo").show();
    $("#editPlan").hide();

    /* 
        ! 逻辑说明
        修改模板
        允许管理员修改
        不允许客户修改
        id由checkPlan页面传过来
     */
    if (id != 'empty')
    {
        $("#sel-part-form").hide();
        delete_cookie("id");
        type = find_cookie("type");
        // sidebar in commonSettings
        $("#planModify_sidebar").html('<i class="icon-drop"></i>Modify Plan');
        $("#planModify_breadcrumb").html("Modify Plan");
        $.ajax(
            {
                type: "GET",
                url: "/getClientPlansByClientPlanId",
                data: { "clientPlanId": id[1] },
                success: function (receive_data) {
                    // console.log(receive_data);
                    var gantt_data = {};
                    gantt_data["links"] = JSON.parse(receive_data["links"]);
                    gantt_data["data"] = JSON.parse(receive_data["data"]);
                    console.log(gantt_data);
                    $.ajax(
                        {
                            type: "GET",
                            url: "/getCurrentUser",
                            success: function (data) 
                            {
                                console.log(data);
                                if (data["authorities"][0]["authority"] != "ROLE_MANAGER") 
                                {
                                    gantt.config.readonly = true;
                                    $("#basicInfo").hide();
                                    $("#editPlan").show();
                                    save_user = 1;
                                }
                            }
                        }
                    );
                    $("#checkPlanDataTemplateDiv").hide();
                    init_Gantt(gantt_data);
                }
            }
        );
    }
    else
    {
        $("#sel-part-form").show();
        templateTableInit();
        $.ajax(
            {
                type: "GET",
                url: "/getUsersByRole",
                success: function (data) {
                    $("#sel-partner").html();
                    var ret = "";
                    console.log(data);
                    ret += '<option value="0">Please Select...</option>';
                    $.ajax(
                        {
                            type: "GET",
                            url: "/getCurrentUser",
                            success: function (roledata) {
                                console.log(roledata);
                                if (roledata["authorities"][0]["authority"] != "ROLE_MANAGER") 
                                {
                                    for (var element in data)
                                    {
                                        if (data[element]["username"] == "zhuri")
                                        {
                                            ret += '<option value=' + data[element]["id"] + ' selected="selected">' + data[element]["username"] + '</option>';
                                        }
                                    }
                                }
                                else
                                {
                                    for (var element in data) 
                                    {
                                        ret += '<option value=' + data[element]["id"] + '>' + data[element]["username"] + '</option>';
                                    }
                                }
                                console.log(ret);
                                $("#sel-partner").html(ret);
                            }
                        }
                    );
                    // console.log(ret);
                }
            }
        );
        init_Gantt(demo_tasks);
        gantt.clearAll();
    }
}

$("#btnNext").click(function ()
{
    text = $("#nf-text").val();
    if ((id == 'empty') && templateTable.rows({selected: true}).count() != 0)
    {
        var selected_id = templateTable.rows({selected: true}).data()[0]["id"];
        console.log(templateTable.rows({ selected: true }).data());
        $.ajax(
            {
                type: "GET",
                url: "/getTemplatePlansByTemplatePlanId",
                data: { "templatePlanId": selected_id },
                success: function (data) {
                    console.log(data);
                    var template_gantt = {};
                    template_gantt["data"] = JSON.parse(data["data"]);
                    template_gantt["links"] = JSON.parse(data["links"]);
                    gantt.parse(template_gantt);
                    $("#basicInfo").hide();
                    $("#editPlan").show();
                    reset_Gantt_sizes();
                },
                error: function (data) {
                    console.log("Error in Reading Template!");
                    alert("Error in Loading Template!");
                }
            }
        );
    }
    else
    {
        $("#basicInfo").hide();
        $("#editPlan").show();
        reset_Gantt_sizes();
    }
});

$("#btnSave").click(function ()
{
    if (save_user == 1) return;
    if (id != 'empty') {
        var formDataTasks = new FormData();
        var formDataText = new FormData();
        var formDataStatus = new FormData();
        var demo_tasks = gantt.serialize();

        formDataTasks.append("createDate", moment().format("x"));
        formDataTasks.append("data", JSON.stringify(demo_tasks["data"]))
        formDataTasks.append("links", JSON.stringify(demo_tasks["links"]));
        formDataTasks.append("id", id[1]);

        formDataText.append("text", text);
        formDataText.append("id", id[1]);

        formDataStatus.append("id", id[1]);
        $.ajax(
            {
                type: "POST",
                url: "/updateClientPlanTasksAndLinks",
                data: formDataTasks,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (text != '')
                    {
                        $.ajax(
                            {
                                type: "POST",
                                url: "/updateClientPlanText",
                                data: formDataText,
                                contentType: false,
                                processData: false,
                                success: function (data) 
                                {
                                    var status_text = $("#sel-status").val();
                                    formDataStatus.append("status", status_text);
                                    if (status_text != 'none')
                                    {
                                        $.ajax(
                                            {
                                                type: "POST",
                                                url: "/updateClientPlanStatus",
                                                data: formDataStatus,
                                                contentType: false,
                                                processData: false,
                                                success: function (data)
                                                {
                                                    alert("Success!");
                                                    redirectLinks("/checkPlan");
                                                },
                                                error: function (data)
                                                {
                                                    console.log("Error in Updating Status");
                                                    alert("Error in Modifying!");
                                                }
                                            }
                                        )
                                    }
                                    else
                                    {
                                        alert("Success!");
                                        redirectLinks("/checkPlan");
                                    }
                                },
                                error: function (data)
                                {
                                    console.log("Error in Updating Text");
                                    alert("Error in Modifying!");
                                }
                            }
                        );
                    }
                    else
                    {
                        var status_text = $("#sel-status").val();
                        formDataStatus.append("status", status_text);
                        if (status_text != 'none') {
                            $.ajax(
                                {
                                    type: "POST",
                                    url: "/updateClientPlanStatus",
                                    data: formDataStatus,
                                    contentType: false,
                                    processData: false,
                                    success: function (data) {
                                        alert("Success!");
                                        redirectLinks("/checkPlan");
                                    },
                                    error: function (data) {
                                        console.log("Error in Updating Status");
                                        alert("Error in Modifying!");
                                    }
                                }
                            )
                        } 
                        else
                        {
                            console.log("Nothing in text, success");
                            alert("Success!");
                            redirectLinks("/checkPlan");
                        }
                    }
                },
                error: function (data) {
                    console.log("Error in Updating Tasks and Links");
                    alert("Error in modifying!");
                }
            }
        );
    }
    else {
        var formData = new FormData();
        var demo_tasks = gantt.serialize();
        var status_text = $("#sel-status").val();
        if (text != '') formData.append("text", text);
        formData.append("createDate", moment().format("x"));
        formData.append("data", JSON.stringify(demo_tasks["data"]));
        formData.append("links", JSON.stringify(demo_tasks["links"]));
        formData.append("partner_id", $("#sel-partner").val());
        if (status != 'none')
            formData.append("status", status_text);
        else
            formData.append("status", "Active");
        $.ajax(
            {
                type: "POST",
                url: "/addClientPlan",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    console.log("Success Add Plan");
                    alert("Success!");
                    redirectLinks("/checkPlan");
                },
                error: function (data) {
                    console.log("Error in Add Plan");
                    alert("Error in creating!");
                }
            }
        );
    }
});

main();