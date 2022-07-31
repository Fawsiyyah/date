//var mybody = document.getElementById("myWebsiteBody");

//var mydate = document.getElementById("myDate");


//var today= new Date();
//var mydate = document.getElementById("myDate").innerHTML=today;

//var today= new Date();
//var mydate = document.getElementById("myDate2").innerHTML=today;

function minimumDate() {
const inputdate = document.querySelector('#myWebsiteBody');
const today= new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1). toString().padStart(2, '0');
const day = (today.getDate()). toString().padStart(2, '0');
const datess = `${year}-${month}-${day}`;
inputdate.min = datess;
}

minimumDate();

function minimumDates() {
    const inputdates = document.querySelector('#myWebsiteBody2');
    const today2= new Date();
    const year2 = today2.getFullYear();
    const month2 = (today2.getMonth() + 1). toString().padStart(2, '0');
    const day2 = (today2.getDate()). toString().padStart(2, '0');
    const datesss = `${year2}-${month2}-${day2}`;
    inputdates.min = datesss;
    }
    
    minimumDates();

    function myFunction() {
        var minToDate = document.getElementById("myWebsiteBody").value;
        document.getElementById("myWebsiteBody2").setAttribute("min", minToDate);
      }