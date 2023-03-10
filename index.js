let express = require('express')
let mongoose = require('mongoose')
let cors = require("cors");
// require('dotenv').config()
let app = express()

// importing routes
const employeeRout = require('./routes/employee')
const projectRout = require('./routes/project')

app.use(cors());
// static
app.use(express.static('public'))

app.use(express.json())


// Routes
app.get('/', (req,res)=> {
    try {
        res.send('home page')
    } catch (error) {
        res.send(error)
    }
})

app.use('/emp', employeeRout)
app.use('/proj', projectRout)

// 404 
app.use((req,res,next) => {
    // let err = new Error('404')
    // err.status = 404;
    // next(err)
    res.send('<h1>page not found</h1>')
})

const port = process.env.PORT || 3000
app.listen(port || 3000, ()=> {
    console.log('port connected');
   
})
 mongoose.connect('mongodb+srv://taskat:taskat@clustertaskat.ipuet.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(_=> console.log('mognosse connected'))
    .catch(e=> console.log('mognosse no connected' + e))