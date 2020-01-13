const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Job = new Schema({
    title: {
        type: String,
        required:true
    },
    responsibilities: {
        type: [String],
        required:true
    },
    period: {
        startDate: {
            type: Date,
            required: false
        },
        endDate: {
            type: Date,
            required: false,
            default: null
        }
    }
})

const Institute = new Schema({
    name: {
        type: String,
        required: true
    },
    yearOfPassing: {
        type: Date,
        required: true
    },
    result: {
        type: String,
        required: true
    }
})

const Project = new Schema({
    title: {
        type: String,
        required: true
    },
    descriptionItems: {
        type: [String],
        required: true
    },
    responsibilities: {
        type: [String],
        required: true
    }
})

const Skill = new Schema({
    name: {
        type: String,
        required: true
    },
    raging: {
        type: Number,
        required: true
    }
})

const Interest = new Schema({
    category: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    }
})

module.exports = {
    Job: Job,
    Institute: Institute,
    Project: Project,
    Skill: Skill,
    Interest: Interest
}