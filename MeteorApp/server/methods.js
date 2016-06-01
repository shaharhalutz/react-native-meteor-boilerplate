Meteor.methods({

  // battles:
  'battles:getBattles': function(userId) {
    console.log('getBattles: userId:'+userId);
    return Battles.find().fetch();
  }
});
