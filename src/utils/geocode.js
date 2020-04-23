const request = require('request');

const  geocode = (address,callback)=>{
    // const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIcomponent(address) + '.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'
    


    // const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1&unit=si'
    
    
    const geocodeUrl  =  'http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query='+address+'&unit=si' 

        request({url:geocodeUrl, json:true}, (error,response) =>{
            if(error)  callback("COnnnect to the internet please !!! (-_-)",undefined)
            else if(response.body.error) callback("Please enter valid location (-_-)",undefined);
    
            else{
                latitude = response.body.location.lat
                longitude  =response.body.location.lon
                location = response.body.location.name
                temperature = response.body.current.temperature

                callback(undefined,{
                    latitude,
                    longitude,
                    location,
                    temperature
                    
                })
                // console.log(latitude)

                
            }
        })
}

module.exports =geocode;



// geocode("Bareilly",(error,data)=>{
//     console.log(data)
// })