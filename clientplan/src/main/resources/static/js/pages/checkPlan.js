function main ()
{
    $.ajax(
        {
            type: "GET",
            url: "/getClientPlansByUserId",
            success: function (data)
            {
                var ret = "";
                for (var element in data)
                {
                    ret += "<tr>";
                    ret += "<td>" + data[element]["id"].toString() + "</td>";
                    ret += '<td><span class="badge badge-success">Active</span></td>';
                    ret += '<td><a href="/planModify">修改...</a></td>';
                    ret += "</tr>";
                }
                $("#checkPlanData > tbody").html(ret);
            }
        }
    );
}

main();