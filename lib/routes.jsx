// Global 
C = {};

FlowRouter.route("/", {
  name: "Home",
  action(params){
    renderMainLayoutWith(<C.Home />)
  }
});

FlowRouter.route("/login", {
  name: "Login",
  action(params){
    renderMainLayoutWith(<C.UserLogin />)
  }
});

FlowRouter.route("/comments", {
  name:"CommentBox",
  subscriptions(params){
    this.register('comments', Meteor.subscribe('comments'))
  },
  action(params){
    renderMainLayoutWith(<C.CommentBox />)
  }
})

FlowRouter.route("/carousel", {
  name:"Carousel",
  action(params){
    renderMainLayoutWith(<C.Carousel />)
  }
})

function renderMainLayoutWith(component){
  ReactLayout.render(MainLayout, {
    header: <C.Header />,
    content: Meteor.user() ? component : <C.UserLogin />, 
    footer: <C.Footer />
  })
}

if (Meteor.isClient) {
    var userWasLoggedIn = false;
    Deps.autorun(function (c) {
        if(!Meteor.userId()){
            if(userWasLoggedIn)
            {
                console.log('Clean up');
                FlowRouter.go('/');
            }
        }
        else{
            userWasLoggedIn = true;
        }
    });
}