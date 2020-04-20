const express=require('express');
const mongoose=require('mongoose');
const http=require('http');
const bodyParser  = require('body-parser');
const cors = require('cors');
const createRoute=require('./routes/createRoute');
const retrieveRoute=require('./routes/retrieveRoute');
const updateRoute=require('./routes/updateRoute');
const deleteRoute=require('./routes/deleteRoute');

//this is the atlas mongodb connect to the mongodb atlas or localstorage
mongoose.connect("",
{ useNewUrlParser: true },
()=>{
    console.log("connect to mongodb");
});

mongoose.set('useFindAndModify', false);
const app =express();
const server=http.createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=process.env.PORT || 3231;
app.use(cors());
//Routes for the fetch apis
app.use('/create',createRoute);
app.use('/retrieve',retrieveRoute);
app.use('/update',updateRoute);
app.use('/delete',deleteRoute);

server.listen(PORT,()=>{
    console.log("connected to port:"+ PORT);
})