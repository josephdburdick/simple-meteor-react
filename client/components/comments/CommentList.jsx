C.CommentList = React.createClass({
  render(){
    return(
      <div className="commentList">
        <C.Comment author="Pete Hunt">This is one comment</C.Comment>
        <C.Comment author="Jordan Walke">This is *another* comment</C.Comment>
      </div>
    )
  }
});