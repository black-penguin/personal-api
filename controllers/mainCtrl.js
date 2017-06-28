var user = require('../user.js');

module.exports = {

  getName : function(req, res)
  {
    res.status(200).json({
      name:user.name
    });
  },
  changeName : function(req, res)
  {
    user.name=req.params.name
  },
  getLocation : function(req, res)
  {
    res.status(200).json({
      location: user.location
    });
  },
  getOccupations : function(req, res)
  {
    res.status(200).json({
      occupations:user.occupations
    });
  },
  getLatestOccupations : function(req, res)
  {
    res.status(200).json({
      latest_occupation:user.occupations[user.occupations.length-1]
    });
  },
  getHobbies : function(req, res)
  {
    res.status(200).json({
      hobbies:user.hobbies
    });
  },
  getHobbiesId : function(req, res)
  {
    res.status(200).json({
      hobbies:user.hobbies.filter(function(element)
      {
        return(element.type===req.params.id)
      })
    });
  },
  getFamily : function(req, res)
  {
    res.status(200).json({
      family:user.family
    });
  },
  getfamilyGender : function(req, res)
  {
    res.status(200).json({
      family:user.family.filter(function(element)
      {
        return(element.gender===req.params.gender)
      })
    });
  },
  getRestaurants : function(req, res)
  {
    res.status(200).json({
      restaurants:user.restaurants
    });
  },
  getRestaurantsName : function(req, res)
  {
    res.status(200).json({
      restaurants:user.restaurants.filter(function(element)
      {
        return(element.name===req.params.name)
      })
    });
  }
  // /restaurants/:name
}
