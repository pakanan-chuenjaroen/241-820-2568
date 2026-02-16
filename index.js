const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');
const app = express();
const port = 8000;
app.use(bodyParser.json());
let users = []
let counter = 1;
//path = /user
app.get('/users', (req, res) => {
  res.json(users);
});
app.post('/user', (req, res) => {
  let user = req.body;
  user.id = counter++;
  users.push(user);
  res.json({ message: 'User added successfully', user: user });
})
app.patch('/user/:id', (req, res) => {
  let id = req.params.id;
  //หา users จาก id
  let selectedindex = users.findIndex(user => {
    if (user.id == id) {
      return true;
    } else {
      return false;
    }
  })
  //ส่ง response กลับไปว่า update users 
  res.json({
    message: 'User updated successfully',
    data : {
    }
  })
})
app.delete('/user/:id', (req, res) => {
  let id = req.params.id;
  let selectedindex = users.findIndex(user => user.id == id);
  if (selectedindex !== -1) {
    users.splice(selectedindex, 1);
    res.json({ 
      message: 'User deleted successfully',
      data: {
        indexDeleted: selectedindex
      }
    })
  } else {
    res.status(404).json({ 
      message: 'User not found'
     })
  }
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});