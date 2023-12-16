const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config()

let initialPath = path.join(__dirname, "public");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res) => {
    rec.sendFile(path.join(initialPath, "index.html"));
})

app.listen(3000, () => {
    console.log('Ура! Сервер запущен');
})

app.post('/mail', (req,res) => {
    const {firstname, lastname, email, msg} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'mail.ru',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
   })     

    const mailOptions = {
    from: 'nestee_nn@mail.ru',
    to: 'nestee_nn@mail.ru',
    subject: 'Сообщение',
    text: `Имя: ${firstname}, \nФамилия: ${lastname} \nEmail: ${email} \nСообщения: ${msg}`
   }

   transporter.sendMail(mailOptions, (err,result) =>{
    if (err){
        console.log(err);
        res.json("О нет, кто-то где-то ошибся!")
    }
    else {
        res.json('Спасибо за отправку сообщения!')
    }
   })
})