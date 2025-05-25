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
const courseRoute = require('./routes/courseRoute');
const notesRoute = require('./routes/notesRoute');
const studentRoute = require('./routes/studentRoute')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs')
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use('/',indexRoute);
app.use('/course',courseRoute);
app.use('/notes',notesRoute);
app.use('/student',studentRoute);

 
const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
