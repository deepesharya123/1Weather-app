const request = require('request');

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Bareilly.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

//                                       /geocoding/v5/{endpoint}/{longitude},{latitude}.json

// (this is the correct format of accessing the location)    https://api.mapbox.com/geocoding/v5/mapbox.places/79.415,28.364.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1

// const catch = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ a + b+ '?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

// /geocoding/v5/{endpoint}/{search_text}.json

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a061a84c8c637a81644720c06c683e1c


const forecast = (latitude,longitude,callback)=>{
// const forecasturl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+latitude+","+longitude+'.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'


// http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query=28.350,79.417&unit=si
const forecasturl = 'http://api.weatherstack.com/current?access_key=81ed36a8e0dd5214b9f79e5089be27dc&query='+latitude+','+longitude+'&unit=si'


//   'https://api.mapbox.com/geocoding/v5/mapbox.places/'+latitude+","+longitude+'.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'

    request({ url:forecasturl , json:true }, ( error , response )=>{
        if(error){
             callback("Check your internet connnection",undefined)
        }
        // else if(response.body.features.length===0){

        //     callback("Please enter valid location for getting the correct data",undefined);
        // }
        else if(response.body.error){
            callback("Please enter valid location (-_-)",undefined);
    
        }
            else{
                location = response.body.location.name
                temperature = response.body.current.temperature

            callback(undefined,{
                location,
                temperature,
                
            })
            // console.log(latitude)
            console.log(`It is currently '${temperature}' degree temperature at the latitude '${latitude}' and longitude '${longitude}' i.e the place you entered '${location}' `)
// ("It is currently "+temperature+" degree temperature at the latitude"+latitude+" and longitude "+longitude+" i.e the place you entered "+location)


        }
    })
}

module.exports = forecast

forecast(79.415, 28.364 ,(error,data)=>{
    // console.log(data)
})




// (wrong)  https://api.mapbox.com/geocoding/v5/mapbox.places/80.33111,26.4725?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1'
//(correct) https://api.mapbox.com/geocoding/v5/mapbox.places/79.415,28.364.json?access_token=pk.eyJ1IjoiZGVlcGVzaGFyeWExIiwiYSI6ImNrOHB2YnBodjBrZngzbW5sdGtyeGg1N3UifQ.nnblJbzxWvRuEznJSufBKg&limit=1
