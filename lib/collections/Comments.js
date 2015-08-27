Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("comments", function () {
    return Comments.find();
  });
}

Meteor.startup(function(){
  if (Comments.find().count() === 0){
    for (var i=0; i < 20; i++) {
      Comments.insert({
         author: Fake.user().name,
         text: Fake.paragraph(3)       
      });
    }
  }
});