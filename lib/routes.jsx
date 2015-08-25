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
  action(params){
    renderMainLayoutWith(<C.CommentBox />)
  }
})

function renderMainLayoutWith(component){
  ReactLayout.render(MainLayout, {
    header: <C.Header />,
    content: component, 
    footer: <C.Footer />
  })
}