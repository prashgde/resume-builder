const express = require('express')
const Member = require('../models/member')

const router = express.Router();

//Defining again javascript objects in accordance with the nested schematypes

function getJobInstance () {
    const _job = {
        title: String,
        responsibilities: [],
        period: {
            startDate: Date,
            endDate: Date
        }
    }
    return _job
}
 
function getInstituteInstance() {
    const _institute = {
        name: String,
        yearOfPassing: Date,
        result: String
    }
    return _institute
}

function getSkillInstance() {
    const _skill = {
        name: String,
        rating: Number
    }
    return _skill
}

function getProjectInstance() {
    const _project = {
        title: String,
        descriptionItems: [],
        responsibilities: []
    }
    return _project
}

function getInterestInstance() {
    const _interest = {
        category: String,
        interests: []
    }
    return _interest
}


router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members)
    } catch (err) {
        res.json({ message: err })
    }
})

let getJobs = (req) => {
    const _jobs = []
    req.body.empHistory.jobs.map(job => {
        _job = getJobInstance()
        _job.title = job.title
        job.responsibilities.map(responsibility => {
            _job.responsibilities.push(responsibility)
        })
        _job.period.startDate = job.period.startDate
        _job.period.endDate = job.period.endDate
        _jobs.push(_job)
    })
    return _jobs
}

let getInstitutes = (req) => {
    const _institutes = []
    req.body.education.institutes.map(institute => {
        _institute = getInstituteInstance()
        _institute.name = institute.name
        _institute.yearOfPassing = institute.yearOfPassing
        _institute.result = institute.result
        _institutes.push(_institute)
    })
    return _institutes
}

let getSkills = (req) => {
    const _skills = []
    req.body.skills.map(skill => {
        _skill = getSkillInstance()
        _skill.name = skill.name
        _skill.rating = skill.rating
        _skills.push(_skill)
    })
    return _skills
}

let getProjects = (req) => {
    const _projects = []
    req.body.projects.map(project => {
        _project = getProjectInstance()
        _project.title = project.title
        project.descriptionItems.map(descItem => {
            _project.descriptionItems.push(descItem)
        })
        project.responsibilities.map(responsibility => {
            _project.responsibilities.push(responsibility)
        })
        console.log(_project)
        _projects.push(_project)
    })
    return _projects
}

let getInterests = (req) => {
    const _interests = []
    req.body.interests.map(interest => {
        _interest = getInterestInstance()
        _interest.category = interest.category
        interest.interests.map(intr => {
            _interest.interests.push(intr)
        })
        _interests.push(_interest)
    })
    return _interests
}

router.post('/', (req, res) => {
    //Employment History
    const jobs = getJobs(req)

    //Education
    const institutes = getInstitutes(req)
    
    //Skills
    const skills = getSkills(req)

    //Projects
    const projects = getProjects(req)

    //Interests
    const interests = getInterests(req)
      
    //Member
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
            jobs: jobs
        },
        education: {
            institutes: institutes
        },
        skills: skills,
        projects: projects,
        rewsAndReco: req.body.rewsAndReco,
        workshops: req.body.workshops,
        interests: interests
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