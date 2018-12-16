
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
                date: "11/09/2018",
                price: "13.99"
            },
            {
                ordernumber: "1004",
                date: "11/15/2018",
                price: "9.99"
            },
            {
                ordernumber: "1005",
                date: "11/19/2018",
                price: "4.00"
            },
            {
                ordernumber: "1006",
                date: "12/02/2018",
                price: "32.34"
            },
            {
                ordernumber: "1007",
                date: "12/03/2018",
                price: "26.53"
            },
            {
                ordernumber: "1008",
                date: "12/07/2018",
                price: "21.23"
            },
            {
                ordernumber: "1009",
                date: "12/10/2018",
                price: "6.67"
            },
            {
                ordernumber: "1010",
                date: "12/11/2018",
                price: "8.42"
            }
        ],

        restaurant: 
            {
            id: "001",
            name: "Bob's Burgers",
            appetizer: {
                item1: "Nachos",
                item: "Cheese Fries",
                item: "Cheese Sticks"
            },
            entrees: {
                item: "Burger",
                item: "Cheese Burger",
                item: "Bacon Cheese Burger"
            },
            pictures: {
              picture1: "image.jpg",
              picture2: "image.jpg"
            }
        
            }
        


    })
    $("#target").html(rendered);
});






/*
$(function() {
    $.getJSON('data.json', function(data) {
        var template = $('#meowtemplate').html();
        var html = Mustache.to_html(template, data);
        $('#target').html(html);
    });
});
*/