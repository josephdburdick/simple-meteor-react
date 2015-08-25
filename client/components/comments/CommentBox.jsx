C.CommentBox = React.createClass({
  render(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <C.CommentList />
        <C.CommentForm />
      </div>
    );
  }
});
