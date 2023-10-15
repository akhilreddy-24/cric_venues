var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    },
    days: {
        type: String,
            required: true
    },
    opening: String,
    closing: String,
        closed: {
        type: Boolean,
        required: true
    }
});

