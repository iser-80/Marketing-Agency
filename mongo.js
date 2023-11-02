const mongoose = require('mongoose')
 
const connectMongo= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL).then((res) => {
            console.log("mongo connection is done");
        });   
    } catch (error) {
        console.log(error)
    }
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {
    connectMongo,
    User,
}