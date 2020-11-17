const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://kevin:Kvp19036100!@cluster0.jdrvh.mongodb.net/test?authSource=admin&replicaSet=atlas-11gdum-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})