# project_agri
developed by NodeJs, Express, MongoDb

THIS SITE FULLY DYNAMIC 
USER CAN EDIT( by editing database ) SITE ACCORDING TO HIS NEED

this is a industrial project..
install node js and mongodb in your device !!


------if somthing went wrong just check ----

make 3 folders (public,src,views)

inside public make folders{ css( put all css file) and images (put all images and svg files)}

inside src make paste { app.js(seperatily) and make folders modles(Detail.js, contact.js, gallery.js, service.js, slider.js --all files inside models) and routes(main.js) }

inside views paste (gallery.hbs, index.hbs, owner.hbs seprately) and make folder partials and paste{ gallerycards.hbs, navbar.hbs, slider.hbs}

------------------------!!!!!



followings are the requires installations which are required to run this project  (just copy commands in terminal):-
npm init
npm install mongoose express hbs body-parser

uncomment all the commented code 1 time present in app.js file and after running file again comment it

copy details collection id from mongodb and replace it on main .js const details =await Detail.findOne({ '_id': '....' })

you are ready now.....
