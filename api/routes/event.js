const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Event = require('../models/event');

router.post('/', (req, res, next) => {
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        date: req.body.date
    });
    event
        .save()
        .then(result => {
            res.status(201).json({
                message: "Event successfully added",
                event: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

module.exports = router;