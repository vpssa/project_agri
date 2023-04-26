const express = require('express')
const { route } = require('express/lib/application')

const Detail = require('../models/Detail')
const Slider = require('../models/slider')
const Service = require('../models/service')
const Contact = require('../models/contact')
const Gallery = require('../models/gallery')


const routes = express.Router()

routes.get("/", async (req, res) => {
    const details = await Detail.findOne({ '_id': '6445948135eefeb68a9229a7' })
    const slides = await Slider.find()
    const services = await Service.find()

    res.render("index", {
        details: details,
        slides: slides,
        services: services
    })
})
routes.get('/gallery', async (req, res) => {
    const details = await Detail.findOne({ '_id': '6445948135eefeb68a9229a7' })
    const gallery = await Gallery.find()
    res.render("gallery", {
        details: details,
        gallery: gallery
    })
})

routes.get('/owner_detail',async (req, res) => {
    const details =await Detail.findOne({ '_id': '6445948135eefeb68a9229a7' })

    res.render("owner", {
        details: details
    })
})

routes.post('/process-contact-form', async (req, res) => {
    console.log('form is submitted')
    console.log(req.body)
    try {
        const data = await Contact.create(req.body)
        res.redirect('/')
    } catch (e) {
        console.log(e)
        res.redirect('/')
    }
})
module.exports = routes