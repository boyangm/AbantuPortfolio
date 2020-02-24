require("dotenv").config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(bodyParser.json());
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('abantudev/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'abantudev', 'build', 'index.html'))
    })
}

app.post('/api/contact', (req,res) =>{
    try{

        const {name, email, message} =req.body;
        const msg = {
            to: 'boyangmatsapola@gmail.com',
            from: email,
            subject: `${name} would like to speak with you`,
            text: message,
            html: `<strong>${message}</strong>`,
          };
          sgMail.send(msg);
          res.send('success!');
    } catch (err){
        console.log(err);
        res.status(500).end();
    }
    

})

var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})