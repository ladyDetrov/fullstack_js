const mongoose = require('mongoose');
require('mongoose-type-email');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: mongoose.SchemaTypes.Email, required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
