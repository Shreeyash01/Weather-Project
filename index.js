const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
    const url="https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=8251ddddcd5eb42e305c268ca49fef40&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const weatherDesc=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The temp in Pune is "+temp+" </h1>");
            res.write("<h2>Weather description : "+weatherDesc+" </h2>");
            res.write("<img src="+imgURL+">");
            res.send();

            // console.log(temp);

            // console.log(weatherData);

            // const object={
            //     name:"SAM",
            //     favFood:"Maggie"
            // }
            // console.log(JSON.stringify(object));
        })
    })
    // res.send("Servver is up and Running.");
})

app.listen(3000, function () {
    console.log("Server Online on port 3000.");
})