var express=require('express');
var router =express.Router();
var request=require('request');


router.post('/',(req,res)=>{
    var post=req.body.city;

    request({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${post}&APPID=4dbb220993bfe30e4180ea93ee3ba59b`,
        json:true
    },(error,response,body)=>{
        var obj={
            main:body.weather[0].description,
            temp:Math.round(body.main.temp-273),
            temp_min:Math.round(body.main.temp_min-273),
            temp_max:Math.round(body.main.temp_max-273),
            humidity:body.main.humidity, 

        }
    res.json(obj);
    });

}
)

    module.exports=router;