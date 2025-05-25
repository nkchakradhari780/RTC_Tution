const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config();

// Database Connection
const db = require('./config/mongoose-connection');

// routes
const indexRoute = require('./routes/indexRoute');
const adminRoute = require('./routes/adminRoute');

const isAdmin = require('./middlewares/isAdmin');

const courseRoute = require('./routes/courseRoute');
const notesRoute = require('./routes/notesRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs')

app.use('/',indexRoute);

app.use('/course',courseRoute);
app.use('/notes',notesRoute);

app.use('/check/admin/',isAdmin,(req,res)=>{
    console.log("hello admin auth checking")
});

app.get('/check/fileupload',(req,res) =>{
    res.render('pdf-notes')
})

app.get('/check/notelist',)
 

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
