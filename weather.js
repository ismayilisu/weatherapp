 const weatherform =document.querySelector("form");
 const cityinput=document.querySelector("input");
 const card=document.querySelector("#content");

 weatherform.addEventListener("submit", async event  =>{

    event.preventDefault();
    const city=cityinput.value;
  
    if (city){

        try {
            const data=await getweather(city);
            displayweather(data);
            
        } catch (error) {
            
            displayerror(error);
            
        }

    }
    else{
        displayerror("Enter a valid city");
    }




 });


 async function getweather(city){
    const apikey="fc24b8e7c93abda943786ab1a299fc62";
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response=await fetch(apiurl);
    var data=await response.json();
    displayweather(data);
    getimage(data.weather[0].main);

    
 }
 function displayweather(data){
    document.querySelector("#place").innerHTML=data.name;
    document.querySelector("#temp").innerHTML=`${data.main.temp} F`;
    document.querySelector("#value1").innerHTML=`${data.main.humidity} C`;
    document.querySelector("#value1").innerHTML=`${data.main.humidity} KM/HR`;
    document.querySelector("#value2").innerHTML=data.wind.speed;
    // getimage(data.weather[0].main);
    
 }
 function getimage(kk){
    const pp=document.querySelector("#image");
    if (kk=="Clouds"){
        pp.src="images/clouds.png";
    }if (kk=="Clear"){
        pp.src="images/clear.png";}
    if (kk=="Drizzle"){
        pp.src="images/drizzle.png";}
    if (kk=="Mist"){
        pp.src="images/mist.png";}
    if (kk=="Rain"){
        pp.src="images/rain.png";}
    if (kk=="Snow"){
        pp.src="images/snow.png";}
    document.querySelector("#hum").src="images/humidity.png";
    document.querySelector("#wind").src="images/wind.png";
 }
 function displayerror(message){
    console.error(message)
 }