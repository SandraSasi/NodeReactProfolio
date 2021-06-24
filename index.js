const express = require('express')
const app = express()
// const mongoose = require('mongoose')
const port = 8000
// const Blog = require('./models/blog')
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

// Configuring our data parsing
app.use(express.urlencoded({
    extend: false
}));
app.use(express.json());
//app.set('views','myviews') expilcitly gicing different file name

//connect to mongodb
// const DbUri = 'mongodb+srv://sashshaw:test1234@cluster0.wpifg.mongodb.net/nodejs?retryWrites=true&w=majority'
// mongoose.connect(DbUri,{useNewUrlParser:true,useUnifiedTopology:true})
// .then((result) => app.listen(port, () => console.log(`Example app listening on port port! ${port}`)))
// .catch((err) => console.log(err));


// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/about',(req,res) => {
//     res.render('index',{root : __dirname});
// })
// app.get('/create',(req,res) => {
//     res.render('create',{root : __dirname});
// })
// app.get('/create-blog',(req,res) => {
//     var blog = new Blog({
//         title : 'New Blog',
//         snippet : "About my new blog",
//         body : 'more about my new blog'
//     })
//     blog.save()
//     .then((res) =>{res.send(res)})
//     .catch((err) => {res.send(err)})
// })
// app.get('/all-blog',(req,res) => {
//     Blog.find()
//     .then((res) =>{res.send(JSON.parse(res))})
//     .catch((err) => {res.send(err)})
// })
app.listen(port, () => console.log(`Example app listening on port port! ${port}`));
app.get('/',(req,res) => {
    res.render('index',{root : __dirname});
})
app.post('/email', (req, res) => {
    //Send an email here but currently dummy email

    const { name, subject, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
});
app.use((req,res) => {
    res.render('404',{root : __dirname});
})