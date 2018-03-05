function main ()
{
    $.ajax(
        {
            type: "GET",
            url: "/getClientPlansByUserId",
            success: function (data)
            {
                var ret = "<tr>";
                for (var element in data)
                {
                    ret += "<td>" + data[element]["id"].toString() + "</td>";
                    ret += '<td><span class="badge badge-success">Active</span></td>';
                }
                $("#checkPlanData > tbody").html(ret);
            }
        }
    );
}

main();