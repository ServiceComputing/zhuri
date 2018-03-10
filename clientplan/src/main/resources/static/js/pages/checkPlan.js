function redirectModifyPlan (id)
{
    add_cookie("id", id);
    // console.log(id);
    window.location.href = "/planModify";
}

function main ()
{
    // $.ajax(
    //     {
    //         type: "GET",
    //         url: "/getClientPlansByUserId",
    //         success: function (data)
    //         {
    //             var ret = "";
    //             for (var element in data)
    //             {
    //                 ret += "<tr>";
    //                 ret += "<td>" + data[element]["id"].toString() + "</td>";
    //                 ret += '<td><span class="badge badge-success">Active</span></td>';
    //                 ret += '<td><a href="/planModify">修改...</a></td>';
    //                 ret += "</tr>";
    //             }
    //             $("#checkPlanData > tbody").html(ret);
    //         }
    //     }
    // );
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
                    html += '<a class="btn btn-info" href="javascript:void(0);" onclick="redirectModifyPlan(' + row.id + ')"><i class="fa fa-edit "></i></a>';
                    return html;
                }
            }
        ]
    });
}

main();