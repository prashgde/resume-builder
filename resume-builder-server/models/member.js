const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const SchemaTypes = require('./schematypes')

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
            type: [SchemaTypes.Job],
            required:true
        }
    },
    education: {
        institutes: [SchemaTypes.Institute]
    },
    projects: {
        type: [SchemaTypes.Project],
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
        type: [SchemaTypes.Interest],
        required: false,
        default: null
    }
})

module.exports = mongoose.model('Members', Member)