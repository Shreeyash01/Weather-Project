const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "8251ddddcd5eb42e305c268ca49fef40";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            
            res.write("<h1>The temp in " + query + " is " + temp + " Degree Celcius. </h1>");
            res.write("<h2>Weather description : " + weatherDesc + " </h2>");
            res.write("<img src=" + imgURL + ">");
            res.send();
        })
    })
});

app.listen(3000, function () {
    console.log("Server Online on port 3000.");
});
