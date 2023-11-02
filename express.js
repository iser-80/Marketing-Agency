const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { connectMongo, User } = require('./mongo')

connectMongo()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:8001", // Allow requests from any origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // If your API uses cookies or sessions
  }))


app.get('/api/users', async (req, res) => {
    const usersData = await User.find()
    if(usersData){
        res.status(200).json({usersData})
    }else{
        res.status(404).json({message: 'Therm users not found'})
    }
})

app.post('/api/login', async (req, res) => {
    const {email, password} = req.body
    const foundedUser = await User.findOne({email})
    if(foundedUser){
        const matchedPassword = await bcrypt.compare(password, foundedUser.password)
        if(matchedPassword){
            const userId = foundedUser._id
            const token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '4h'})
            res.cookie('jwt', token, {
                httponly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 4,
            })            

            res.status(200).json({message: 'user logged in successfully'})
        }else{
            res.status(401).json({message: 'password is incorrect'})
        }
    }else{
        res.status(404).json({message: 'user not found'})
    }
})

app.post('/api/register', async (req, res) => {
    const {name, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(newUser){
        res.status(201).json({message: 'new user has been added'})
    }
})

app.post('/api/logout', async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: 'user logged out'})  
})


app.listen(process.env.PORT || 8001, console.log('port connected'))
