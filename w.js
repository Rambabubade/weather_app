var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
var day=dayOfWeek
var date=  dayOfMonth + " of " + curMonth + ", " + curYear;
document.querySelector(".head1").textContent = dayOfWeek;
document.querySelector(".head2").textContent = date;

const apiKey="3da54fd717d481964be459670c401208";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".enter");
const searchBtn=document.querySelector(".submit");
const weatherIcon=document.querySelector(".img2")
async function checkWeather(city){
    const responce=await fetch(apiUrl+city+`&appid=${apiKey}`);

    // if(responce.status=404){
    //     document.querySelector(".error").style.display="block";
    //     document.querySelector(".hide").style.display="none";
    // }else{

    // }
    var data= await responce.json();
    console.log(data);
    document.querySelector(".head3").innerHTML=data.name;
    document.querySelector(".head4").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".head5").innerHTML=data.main.humidity+"% humidity <br>"+data.wind.speed+"kmph wind speed";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="haze.png"
    }
    document.querySelector(".hide").style.display="block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
