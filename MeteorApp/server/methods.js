Meteor.methods({

  // battles:
  'battles:getBattles': function(userId) {
    console.log('getBattles: userId:'+userId);
    return Battles.find().fetch();
  },
  'battles:createBattle': function(battle) {
    console.log('createBattle: title:'+battle.title);
    const i = Battles.find().count();
    return Battles.insert({
      joined: false,
      createdAt: new Date(),
      title: battle.title
    });
  }
});
