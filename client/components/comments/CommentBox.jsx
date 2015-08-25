C.CommentBox = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      comments: Comments.find().fetch()
    };
  },
  render(){

    return(
      
      <div className="commentBox">
        <h1>Comments</h1>
        <C.CommentList comments={this.data.comments} />
      </div>
      
    );
  }
});
