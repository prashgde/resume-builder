const express = require('express')
const SchemaTypes = require('../models/schematypes')
const Member = require('../models/member')

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members)
    } catch (err) {
        res.json({ message: err })
    }
})


router.post('/', (req, res) => {
    //Employment History
    let _job = SchemaTypes.Job
    let _jobs = [_job]
    console.log(Array.isArray(_job.responsibilities))
    /*let getJobs = () => {
        req.body.empHistory.jobs.map(job => {
            _job.title = job.title
            job.responsibilities.map(responsibility => {
                _job.responsibilities.push(responsibility)
                console.log(responsibility)
            })
            _jobs.push(_job)
        })
        return _jobs
    }

    //Education
    
    const jobs = getJobs()*/
    const member = new Member({
        personal: {
            name: req.body.personal.name,
            email: req.body.personal.email,
            phone: req.body.personal.phone,
            addressLine1: req.body.personal.addressLine1,
            addressLine2: req.body.personal.addressLine2,
            addressLine3: req.body.personal.addressLine3
        },
        social: {
            linkedIn: req.body.social.linkedIn,
            facebook: req.body.social.facebook,
            instagram: req.body.social.instagram,
            twitter: req.body.social.twitter
        },
        profSummary: req.body.profSummary,
        empHistory: {
            jobs: req.body.empHistory.jobs
        },
        education: req.body.education,
        projects: req.body.projects,
        rewsAndReco: req.body.rewsAndReco,
        workshops: req.body.workshops,
        interests: req.body.interests
    })
    member.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({ message: err })
        })
})

//Specific member
router.get('/:memberId', async (req, res) => {
    try {
        const member = await Member.findById(req.params.memberId)
        res.json(member)
    } catch (err) {
        res.json({ message: err })
    }
})

//Delete member
router.delete('/:memberId', async (req, res) => {
    try {
        const removedMember = await Member.remove({ _id: req.params.memberId })
        res.json(removedMember)
    } catch (err) {
        res.json({ message: err })
    }
})

//Update a member
router.patch('/:memberId', async (req, res) => {
    try {
        const updatedMember = await Member.update({ _id: req.params.memberId },
            { $set: { title: req.body.title } })
        res.json(updatedMember)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;