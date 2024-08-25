//sheryians vid4, in this tutorial:
//1.setting up a basic express application
//Routing
//Middleware
//Request and response handling
//error handling

// Express js Framework:
//express js ek npm package hai
// framework matlab ek flow maintain karna hoga 
// managing everything from receiving the request and giving the response



//app.use is a middleware
//middleware is a code jo tab chalta hai when the server accepts a req and sends it to the route, middleware code runs server and route ke beech mein and performs the code written in it.

const express = require('express')
const app = express()


//next() is used to send the request further to the router after the middleware code has been executed
app.use(function(req, res, next){
  console.log("Middleware chala");
  next();
})

app.use(function(req, res, next){
  console.log("Middleware chala ek aur baar");
  next();
})

//app.get(route, request handler)format for below. request handler is a fn as shown below
app.get('/', function (req, res) {
  res.send('Home Page!')
})

// app.get('/profile', function (req, res) {
//   res.send('Profileee Section')
// })

//upar vala sahi code hai, is vale mein error create kiya to handle it below using error handler
app.get('/profile', function (req, res, next) {
  return next(new Error("Not implemented")) //this will get printed in the console
});


//error handling (sabse last mein lagate hain error handlers ko )
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke") // this will get printed in the webpage
})

app.listen(3000)