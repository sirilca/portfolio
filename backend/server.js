const express = require('express')
const cors=require('cors')
const bodyparser = require('body-parser')
const app= express()
const mongoose= require('mongoose')
const nodemailer =require('nodemailer')
const {mon} =require('./mongoose')

app.use(cors())
app.use(bodyparser.json())



mongoose.connect('mongodb://localhost/portfolio',{
    useNewUrlParser:true }).then(()=>{console.log('mongo connected')})


    
    
    
    app.post('/',(req,res)=>{
        const {name ,mail,message}=req.body;
        console.log(name+mail+message)
        const sdata=new mon({name,mail,message})
        sdata.save()
        res.send('donee')
        
        const transport=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'sirilcantony2@gmail.com',
                pass:'lbbl hmmb qoqn tksl'
            }
        })


        const mailoption={
            from:'sirilcantony2@gmail.com',
            to:'sirilcantony4@gmail.com',
            subject:'contact info',
            text:`Name:${name}-->\n mail---->${mail} \nmessage---> ${message}`
        }

        transport.sendMail(mailoption,(err,info)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log('emailsent'+info.response)
            }
        })

    })
    

app.listen(5000,()=>{console.log('server started')})