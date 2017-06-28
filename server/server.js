const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//controllers
var middleware = require('../controllers/middleware.js');
var mainCtrl = require('../controllers/mainCtrl.js');

//apply middleware to every request
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.put('/name/:name', changeName)
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:id', mainCtrl.getHobbiesId);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getfamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.listen(3000);

/*if(req.query)
{
  console.log("there is a query!")
  .finter()
  user.sort()
}

if(req.query.asc)
{
  user.sort((a,b)=>
  {
    return a.age<b.age
  })
}

var sort=req.query.sort||"age"
if(req.query.asc)
{
  user.sort((a,b)=>
  {
    return a[sort]<b[sort]
  })
}

/api/friend?sort=salary&asc=1
*/
