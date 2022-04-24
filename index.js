const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

const users = [
{id:1, name:"Sabana", mobile:01914, email:"s@gmail.com"},
{id:2, name:"Bobita", mobile:01911, email:"b@gmail.com"},
{id:3, name:"Sobita", mobile:01912, email:"c@gmail.com"},
{id:4, name:"Sokina", mobile:01913, email:"d@gmail.com"},
{id:5, name:"Razzak", mobile:01914, email:"e@gmail.com"}
]

app.get('/', (req, res)=>{
    res.send('Look Mama!! node server')
});

app.get('/users', (req, res) =>{
    // ‍সার্চ কোয়ারী
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id); 
    const user = users.find(u => u.id === id);
    res.send(user)
})
app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})
app.listen(port, () => {
    console.log('Listening to port third steps', port);
})
