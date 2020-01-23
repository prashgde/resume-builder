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

const Skill = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
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

const Member = new Schema({
    personal: {
        name: {
            type: String,
            required: true,
            uppercase: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true
        },
        phone: {
            type: Number,
            required: true
        },
        addressLine1: {
            type: String,
            required: true
        },
        addressLine2: {
            type: String,
            required: false,
            default: null
        },
        addressLine3: {
            type: String,
            required: false,
            default: null
        }
    },
    social: {
        linkedIn: {
            type: String,
            required: true,
            lowercase: true
        },
        facebook: {
            type: String,
            required: false,
            lowercase: true,
            default: null
        },
        instagram: {
            type: String,
            required: false,
            lowercase: true,
            default: null
        },
        twitter: {
            type: String,
            required: false,
            lowercase: true,
            default: null
        }
    },
    profSummary: {
            type: String,
            required: true
    },
    empHistory : {
        jobs: {
            type: [Job],
            required:true
        }
    },
    skills: {
        type: [Skill],
        required: true   
    },
    education: {
        institutes: [Institute]
    },
    projects: {
        type: [Project],
        required: true
    },
    rewsAndReco : {
        type: [String],
        required: false,
        default: null
    },
    workshops: {
        type: [String],
        required: false,
        default: null
    },
    interests: {
        type: [Interest],
        required: false,
        default: null
    }
})

module.exports = mongoose.model('Members', Member)