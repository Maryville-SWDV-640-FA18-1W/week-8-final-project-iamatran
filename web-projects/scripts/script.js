//Still working on getting the mySQL query to populate on HTML, so I'm going to simulate the results of a query for my data



//Mustache JS 

$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        user: {
            Id: "1",
            UserName: "candykid",
            Name: "Peter Tran",
            BillingAddress: "1",
            HomeAddress: "2"
            
        },

        address: {
            Id: 1,
            Address1: "123 Fake St.",
            Address2: "St. Louis, MO"
        },

        orderhistory: [
            {
                ordernumber: "1001",
                date: "11/02/2018",
                price: "10.99"
            },
            {
                ordernumber: "1002",
                date: "11/07/2018",
                price: "12.99"
            },
            {
                ordernumber: "1003",
                date: "11/22/2018",
                price: "13.99"
            },
            {
                ordernumber: "1004",
                date: "12/08/2018",
                price: "9.99"
            }
        ]
    })
    $("#target").html(rendered);
});




