function main ()
{
    $.ajax(
        {
            type: "GET",
            url: "/getClientPlansByUserId",
            success: function (data)
            {
                console.log(data);
            }
        }
    );
}

main();