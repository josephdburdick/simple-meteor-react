C.UserLogin = React.createClass({
  onSubmit(e){
    e.preventDefault();
    var self = this,
        email = $(e.currentTarget).find('[name=email]').val(),
        password = $(e.currentTarget).find('[name=password]').val();

    Meteor.loginWithPassword(email, password, function(error){
      if (error){
        console.log(error.reason);
      } else {
        FlowRouter.go('Home');
      }
    });

  },
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Login</h1>
            <form onSubmit={ this.onSubmit }>
              <input type="text" name="email" placeholder="Enter email" className="form-control" />
              <input type="password" name="password" placeholder="Enter password" className="form-control" />
              <input type="submit" value="Login" className="btn btn-default" />
            </form>
          </div>
        </div>
      </div>
    )
  }
})