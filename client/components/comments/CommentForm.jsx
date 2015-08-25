C.CommentForm = React.createClass({
  render() {
    return (
      <form className="form-inline commentForm" role="form">
        <div className="row">
          <div className="col-lg-12">
            <div className="input-group input-group-lg">
              <input type="text" className="form-control" placeholder="Your comments" />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Add</button>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
});