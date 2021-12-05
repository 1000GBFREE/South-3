
var $city = $(".location_region_country");

$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {

var xmlhttp = new XMLHttpRequest();
var ip_address = data.ip;
var ip_key = "1eb169f0-9411-4ecb-8bcb-466aa9979330"
var url = "https://api.ipfind.com/?ip=" + ip_address +"&auth="+ ip_key;
console.log(ip_address)

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
      console.log(result);
      $city.text(result.region + " " + result.country);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
});

function showDateTime() {
    var myDiv = document.getElementById("date");
  
    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  
    var time = hour + ":" + min + ":" + sec;
    myDiv.innerText = ` ${today}. Time is ${time}`;
  }
  setInterval(showDateTime, 1000);

 /* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function deEltNbr(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    deNbrRec(25, endNbr, elt);
  }
  
  /*A recursive function to derease the number.*/
  function deNbrRec(i, endNbr, elt) {
    if (i >= endNbr) {
      elt.innerHTML = i;
      setTimeout(function() {//Delay a bit before calling the function again.
        deNbrRec(i - 1, endNbr, elt);
      }, 2000);
    }
  }
  
  /*Function called on button click*/
  function deNbr(){
    deEltNbr("number_decrease");
  }
  
  deEltNbr("number_decrease"); /*Call this funtion with the ID-name for that element to derease the number within*/
  
