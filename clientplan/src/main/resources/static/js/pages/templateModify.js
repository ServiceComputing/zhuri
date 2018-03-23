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

    if (id != 'empty')
    {
        $("#sel-part-form").hide();
        delete_cookie("id");
        $("#templateModify_sidebar").html('<i class="icon-drop"></i>Modify Template');
        $("#templateModify_breadcrumb").html("Modify Template");
        $.ajax(
            {
                type: "GET",
                url: "/getTemplatePlansByTemplatePlanId",
                data: { "templatePlanId": id[1] },
                success: function (receive_data) {
                    var gantt_data = {};
                    gantt_data["links"] = JSON.parse(receive_data["links"]);
                    gantt_data["data"] = JSON.parse(receive_data["data"]);
                    init_Gantt(demo_tasks);
                    gantt.clearAll();
                    gantt.parse(gantt_data);
                }
            }
        );
    }
    else
    {
        $("#sel-part-form").show();
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
    $("#basicInfo").hide();
    $("#editPlan").show();
    reset_Gantt_sizes();
    save_user = 1;
});

$("#btnSave").click(function ()
{
    if (save_user == 0) return;
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
                url: "/updateTemplatePlanTasksAndLinks",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (text != '') {
                        $.ajax(
                            {
                                type: "POST",
                                url: "/updateTemplatePlanText",
                                data: formDataText,
                                contentType: false,
                                processData: false,
                                success: function (data) {
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
                                    else {
                                        alert("Success!");
                                        redirectLinks("/checkPlan");
                                    }
                                },
                                error: function (data) {
                                    console.log("Error in Updating Text");
                                    alert("Error in Modifying!");
                                }
                            }
                        );
                    }
                    else {
                        console.log("Nothing in text, success");
                        alert("Success!");
                        redirectLinks("/checkPlan");
                    }
                },
                error: function (data) {
                    alert("Error in modifying!");
                }
            }
        );
    }
    else {
        var formData = new FormData();
        var status_text = $("#sel-status").val();
        var demo_tasks = gantt.serialize();
        formData.append("text", text);
        formData.append("createDate", moment().format("x"));
        formData.append("data", JSON.stringify(demo_tasks["data"]));
        formData.append("links", JSON.stringify(demo_tasks["links"]));
        formData.append("partner_id", $("#sel-partner").val());
        if (status_text != 'none')
            formData.append("status", status_text);
        $.ajax(
            {
                type: "POST",
                url: "/addTemplatePlan",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    alert("Success!");
                    redirectLinks("/checkPlan");
                },
                error: function (data) {
                    alert("Error in creating!");
                }
            }
        );
    }
});

main();