const express = require('express')
const app = express()


app.get('/user/:id', function (req, res) {
    const users = [ 
    {id:1,name:"Bread",price:2.5},
    {id:2,name:"Milk",price:3},
    {id:3,name:"Chocholate",price:8} ];
    res.json(JSON.stringify(users.find((user) => user.id == req.params.id)));
      });
      app.get('/user', function (req, res) {
        const users = [ {id:1,name:"Sosidge",price:12},
        {id:2,name:"Crax",price:1},
        {id:3,name:"Juice",price:3} ];
            res.json(users);
          });


        //   app.post('/user',(req, res) => {
        //     console.log(req.body)
        //     arr.push(req.body)
        //     res.json(arr)
        //   })

        //   app.patch('user//:id',(req,res)=>{
        //    let user = arr.find(el=> el.id == req.params.id)
        //    user.name=req.body.name

        //    res.json(user)

        //   })

        //   app.delete('user//:id',(req, res) =>{
        //     let users = arr.filter(el=> el.id == req.params.id)
        //     res.json(`Deleted user by id - ${req.params.id}`)
        //   })

app.listen(3000, () => {
    console.log("Server started on 3000 port")
})