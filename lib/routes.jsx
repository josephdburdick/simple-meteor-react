// Global 
C = {};

FlowRouter.route("/", {
  name: "home",
  action(params){
    renderMainLayoutWith(<C.Home />)
  }
});

FlowRouter.route("/login", {
  name: "login",
  action(params){
    renderMainLayoutWith(<C.UserLogin />)
  }
});

FlowRouter.route("/comments", {
  name: "comments",
  subscriptions(params){
    this.register('comments', Meteor.subscribe('comments'))
  },
  action(params){
    renderMainLayoutWith(<C.CommentBox />)
  }
})

FlowRouter.route("/carousel", {
  name: "carousel",
  action(params){
    renderMainLayoutWith(<C.Carousel />)
  }
})

function renderMainLayoutWith(component){
  ReactLayout.render(MainLayout, {
    header: <C.Header />,
    content: component, 
    footer: <C.Footer />
  })
}

if (Meteor.isClient) {
  var userWasLoggedIn = false;
  Deps.autorun(function (c) {
    if(!Meteor.userId()){
      if(userWasLoggedIn){
        console.log('Clean up');
        FlowRouter.go('/login');
      }
    }
    else{
      userWasLoggedIn = true;
    }
  });
}