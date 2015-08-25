Meteor.startup(() => {
  if (Meteor.users.find().count() === 0){
    Accounts.createUser({
      email: "josephdburdick@gmail.com",
      password: "farmer"
    });
  }
});