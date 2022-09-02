let axios = require("axios")

// - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
// - then change the above to get the temperature only( of London)
// - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
// result should look something like this
// [
// {city:"London", temp: 280},
// {city:"Moscow", temp: 290},
// {city:"Bangalore", temp: 301.2},
// .......
// ]

let getSortedCities = async function (req, res) {
    try{let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityObjArray = []
    for (let i = 0; i < cities.length; i++) {
        let obj = { city: cities[i] }
        let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fdc86ec9a5a1dae080e56d3bf5e03f72`)
        console.log(response.data.main.temp)
        obj.temp = response.data.main.temp
        cityObjArray.push(obj)
    }
    cityObjArray.sort((a,b)=>{return a.temp-b.temp})
    res.status(200).send({status:true,data:cityObjArray})}
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.getSortedCities = getSortedCities