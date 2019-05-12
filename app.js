const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const eventRoutes = require("./api/routes/event");
const errorhandler = require('errorhandler')

const app = express();

const isProduction = process.env.NODE_ENV === 'production';

if(isProduction){
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
} else {
    app.use(errorhandler());
    mongoose.connect('mongodb://localhost/conduit',  {useNewUrlParser: true});
    mongoose.set('debug', true);
}

mongoose.Promise = global.Promise;


app.use(cors())
app.use(express.json());


app.use("/events", eventRoutes);

app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;