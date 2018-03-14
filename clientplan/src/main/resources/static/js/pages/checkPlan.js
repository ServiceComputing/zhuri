function redirectModifyPlan (id)
{
    add_cookie("id", id);
    window.location.href = "/planModify";
}

function main ()
{
    $("#checkPlanData").dataTable({
        "aLengthMenu": [10, 20, 25, 50],
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "/getClientPlansByUserId",
            "type": "GET",
            // "data": { "pageNum": 1, "pageSize": 100 },
            "dataType": "json",
            // "dataSrc": "rows"
        },
        "columns": [
            { "data" : "id" },
            { "data" : "status" },
            { "data" : "text" },
            { "data" : "id" }
        ],
        "columnDefs": [
            {
                "targets": 1,
                "render": function (data, type, row)
                {
                    return '<td><span class="badge badge-success">' + data + '</span></td>';
                }
            },
            {
                "targets": 3,
                "render": function (data, type, row)
                {
                    // console.log(data);
                    // console.log(type);
                    // console.log(row);
                    var html = "";
                    html += '<a class="btn btn-info" href="javascript:void(0);" title="Edit Plan" onclick="redirectModifyPlan(' + row.id + ')"><i class="fa fa-edit "></i></a>';
                    return html;
                }
            }
        ]
    });

    $.ajax(
        {
            type: "GET",
            url: "/getCurrentUser",
            success: function (data)
            {
                console.log(data);
            }
        }
    );
    $.ajax (
        {
            type: "GET",
            url: "/getUsersByRole",
            success: function (data)
            {
                console.log(data);
            }
        }
    )
}

main();