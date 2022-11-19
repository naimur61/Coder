const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const catagories = require('./Data/categories.json');
const courses = require('./Data/courses.json');


app.use(cors());
app.get('/', (req, res) => {
   res.send('Server is running.')
})

app.get('/course-categories', (req, res) => {
   res.send(catagories);
})

app.get('/course/:id', (req, res) => {
   const id = req.params.id;
   // console.log(id);
   const selectedCourse = courses.find(crs => crs.id === id);
   res.send(selectedCourse)
})

app.get('/category/:id', (req, res) => {
   const id = req.params.id;
   // console.log(id);
   if (id === '7') {
      res.send(courses)
   } else {
      const selectedCategory = courses.filter(crs => crs.category_id === id);
      res.send(selectedCategory);
   }
})

app.listen(port, () => { console.log('Port is Running ...!', port); })
