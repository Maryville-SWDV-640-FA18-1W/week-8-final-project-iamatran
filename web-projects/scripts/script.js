//Since I don't have the mySQL running, I'm going to simulate the results of a query for my data

var query{
    EMPLOYEE_ID: 100,
    FIRST_NAME: 'Steven',
    LAST_NAME: 'King',
    EMAIL: 'SKING@example.com',
    PHONE_NUMBER: '515.123.4567',
    HIRE_DATE: Wed Jun 17 1987 00:00:00 GMT+0530 (India Standard Time),
    JOB_ID: 'AD_PRES',
    SALARY: 24000,
    COMMISSION_PCT: 0,
    MANAGER_ID: 0,
    DEPARTMENT_ID: 90
}



//Mustache JS attempt


$(document).ready(function(){
    var template = $("#template").html();
    Mustache.parse(template);

    var rendered = Mustache.render(template, {
        user:{
            name: "Steve",
            age: "20",
            home: "Dallas"
        },
        show:true
    })

    $("#target").html(rendered);
});













