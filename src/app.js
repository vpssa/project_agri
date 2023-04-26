const express=require("express")
const hbs = require('hbs')
const mongoose=require('mongoose')
const routes=require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/slider")
const Service=require('./models/service')
const Gallery=require('./models/gallery')
const bodyParser=require('body-parser')
const app=express()


app.use(bodyParser.urlencoded({
    extended:true
}))

app.use("/static",express.static("public"))
app.use('',routes)
//(template engine)
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

//db connections
var mongouri ="mongodb://localhost/website_tut"
const connection =()=>{
    mongoose.connect(mongouri)
    .then(
        ()=>{
            console.log('connected to db')

            // Gallery.create([
            //     {
            //         imageUrl:'/static/images/African-Lily.jpg',
            //         title:'African-Lily',
            //         content:'Other names include the Star of Bethlehem or the Lily of the Nile, despite only being native to the South of Africa. These evergreen perennials reach heights of up to one meter and produce erect stems carrying a globe-shaped display of blue, lilac, or white blooms. Each globe has showy trumpet-shaped flowers that do well in salty sea winds, making them ideal for a coastal garden. ',
            //         button:'Order now',
            //         buttonLink:'/#contact_us_section'
            //     },
            //     {
            //         imageUrl:'/static/images/Alpenrose.jpg',
            //         title:'Alpenrose',
            //         content:'This upright evergreen shrub produces glossy, dark-green leaves and clusters of tubular rose pink to crimson flowers. It blooms in the early summer and grows in a compact and upright habit. The Alpenrose can grow up to five feet high, looking great in the rear of borders and at the side of water gardens. It prefers full sun to partial shade and is hardy in zones four to nine. ',
            //         button:'Order now',
            //         buttonLink:'/#contact_us_section'
            //     },
            //     {
            //         imageUrl:'/static/images/Amaryllis.jpg',
            //         title:'Amaryllis',
            //         content:'This is a popular bulb given as a gift around the Christmas holidays, thanks to their large, brightly colored blooms supported by large stems. There are five types of Amaryllis; large flowering, double flowering, small flowering, cybister, and trumpet. The most popular is the large flowering, single flower Amaryllis, which grows up to 10 inches tall. The bigger the bulb, the more stems and flowers they produce. They may be planted outdoors (deep south only) and are easy to bring into bloom. Amaryllis Clown is an award-winning old favorite that is reminiscent of candy canes.',
            //         button:'Order now',
            //         buttonLink:'/#contact_us_section'
            //     },
            //     {
            //         imageUrl:'/static/images/American-Lotus.jpg',
            //         title:'American-Lotus',
            //         content:'This might not be as popular as the Sacred Lotus that is more often seen in cultivation. But these flowers provide a blanket of elegance thanks to their pure white petals and a yellow center. They grow up to 12 inches across and are a sight to behold. It is a marginal aquatic perennial that also produces large umbrella-like leaves. They are native to eastern North America. ',
            //         button:'Order now',
            //         buttonLink:'/#contact_us_section'
            //     }

            // ])

            // Service.create([
            //     {
            //         icon:'fa-brands fa-algolia',
            //         title:'Provive Best Services',
            //         descripition:'We provide cources that helps our students in learning and in placement.',
            //         linkText:'Check',
            //         link:'https://www.google.com'
            //     },
            //     {
            //         icon:'fa-brands fa-stack-overflow',
            //         title:'Best Materials',
            //         descripition:'Best materials from best teachers',
            //         linkText:'Learn',
            //         link:'https://www.google.com'
            //     },
            //     {
            //         icon:'fa-solid fa-city',
            //         title:'Good infrastructure',
            //         descripition:'top rated labs and colidore',
            //         linkText:'Know more',
            //         link:'https://www.google.com'
            //     },
            // ])

            // Slider.create([
            //     {
            //         title:'Learn java in very easy manner',
            //         subTitle:"java is one of the most popular language",
            //         imageUrl:"/static/images/s1.jpg"
            //     },
            //     {
            //         title:'what is Django',
            //         subTitle:"Django is famus framework in web development",
            //         imageUrl:"/static/images/s2.jpg"
            //     },
            //     {
            //         title:'what about nodejs',
            //         subTitle:"Node js is run time environment to execute javascript outside browser",
            //         imageUrl:"/static/images/s4.jpg"
            //     },
            // ])


            // Detail.create({
            //     brandName:"info technical solutions",
            //     brandIconUrl:"https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_960_720.png",
            //     links:[
            //         {
            //             label:"Home",
            //             url:'/'
            //         },
            //         {
            //             label:"Services",
            //             url:'/services'
            //         },
            //         {
            //             label:"Gallery",
            //             url:'/gallery'
            //         },
            //         {
            //             label:"About",
            //             url:'/about'
            //         },
            //         {
            //             label:"Contact us",
            //             url:'contact-us'
            //         }
            //     ]
            // })
        }
    )
}
connection()
app.listen(process.env.PORT | 3000,()=>{
    console.log("server started")
})