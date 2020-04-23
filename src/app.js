const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast  = require('./utils/37forecast');

const app = express()

const  port  = process.env.PORT ||3000
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))            //this path contain all the things that will appear in the console screeen

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Deepesh Arya'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Deepesh Arya'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Deepesh Arya'
    })
})

app.get('/weather', (req, res) => {

    const adrs = req.query.address;

    if(!req.query.address) return res.send("YOU MUST ENTER AN ADDRESS FOR GETTING THE INFORMATION")
    

    geocode(req.query.address ,(error,data )  =>{
        if(error) return res.send("SOMEThing is not good")
        
        latitude= data.latitude
        longitude = data.longitude

        console.log(data)
        forecast(data.latitude,data.longitude,(error,forecastdata)=>{
            if(error) return  res.send("YOU GOT ERRO IN FORECAST ",error)
           
            res.send({data})


        })

                
    })

    // geocode(req.query.address,(err,data)=>{
    //     if(err) return res.send("YOU entered the invalid address",req.query.address);
    // forecast((data.latitude,data.longitude),(error,forecastdat)=>{
    //             res.send({
    //                 data:data,
    //                 forecastData:forecastdat,
    //              //    data.latitude,
    //                      adrs
    //                  })
    //             })
        

    // })



})

app.get('/products',(req,res)=>{
    if(!req.query.search)    return  res.send( {
        error:"You have note eneteewred the search value"  }  )
    
            // req.query.(name of the thing that you searched)

    console.log(req.query)   
    const game = req.query.search;
    console.log(game)
    res.send({
        products:[]
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Deepesh Arya',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
  
    res.render('404', {
        title: '404',
        name: 'Deepesh Arya',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port '+port)
})