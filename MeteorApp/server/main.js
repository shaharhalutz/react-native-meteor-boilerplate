import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  if (Battles.find().count() === 0) {
  let i = 0;
  let timestamp = (new Date()).getTime();
  while (i < 10) {
    Battles.insert({
      title: `Item #${i}`,
      createdAt: new Date(timestamp),
      joined: false
    });
    timestamp += 1; // ensure unique timestamp
    i += 1;
  }
}
});
