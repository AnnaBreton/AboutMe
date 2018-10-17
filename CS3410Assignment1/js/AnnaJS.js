/**
 * Created by Anna on 1/28/2018.
 */
function getPassword(){
    if (document.getElementById("id1").value === "1234") {
        alert("Correct Password!")
    } else {
        alert("Incorrect Password")
    }
}

function getNameandLang(){
    var var1 = document.getElementById("myLanguages").value;
    var var2 = document.getElementById("myName").value;
    var var3= " The name you typed was: "
    var var4= " and the language you chose was: "
    var var6= " "
    if (confirm ("Do you want to continue?")){
        var var5 = var3.concat(var2).concat(var6).concat(var4).concat(var1);
    }else {
      var var5 = alert("You pressed cancel");
    }
    return var5;
}

/**JS for bar graph**/
$(function () {
    var myChart = Highcharts.chart('container4', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hours per Week for a Given Activity'
        },
        xAxis: {
            categories: ['Cycling', 'Running', 'Hiking']
        },
        yAxis: {
            title: {
                text: 'Hours'
            }
        },
        series: [{
            name: 'Spring/Summer/Fall',
            data: [15, 5, 4],
            color: '#bf17ab'
        }, {
            name: 'Fall/Winter',
            data: [8, 10, 7],
            color: '#3858ca'
        }]
    });
});

function HTMLvalidate() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["fcolor"].value;
    if (x == "" || y =="") {
        alert("please fill in missing information");
        return false;
    } else {
        alert("Thank you for your response")
    }
}

function myFunction() {
    alert("Hello! I am an alert box!");
}

function nameEnter() {
    var person = prompt("Enter your name here:");
    if (person != null) {
        document.getElementById("promptbox").innerHTML =
            "Hello " + person + "! Thanks for clicking!";
    }
}

function showDetails(email) {
    var myEmail = email.getAttribute("data-email-type");
    alert("My " + email.innerHTML + " is " + myEmail + ".");
}
