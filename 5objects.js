// JavaScript Objects
// How you define an object:
myProfile = {
  name:  "Tomas The Great",
  email:  "tomas@tomas.com",
  'zip code': 12345,
  isInvited: true
};

// You can also nest objects and use arrays.
superManInfo = {
  name: "Clark Kent",
  email: "superman@superman.com",
  city: "Metropolis",
  powers: "Flight, Heat Vision, Super Strength, Ice Breath, Invulnerability",
  isGood: true,
  friends: [
    {
      name: "Wonder Woman",
      email: "wonderwoman@wonderwoman.com"
    },
    {
      name: "Batman",
      email: "batman@batman.com"
    }
  ]
};

// Accessing an object's properties is easy.  You use dot notation
// and arrays.
console.log(superManInfo.name);            // Clark Kent
console.log(superManInfo.friends[1].name); // Batman

// Below is an example of where you would see objects on Meteor:
Posts.findOne({ title: 'My Post' });

// NOTE: Is JavaScript truly object-oriented?
