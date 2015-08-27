C.CommentList = React.createClass({
  componentDidMount(){
    let self = this;
    $(window).scroll(function(e){
      console.log(self);
    });
  },
  render(){
    let comments = this.props.comments;

    return(
      <div className="container">
        <div className="detailBox">
          <div className="titleBox">
            <label>Comment Box</label>
            <button type="button" className="close" aria-hidden="true">&times;</button>
          </div>
          <div className="commentBox">
            <p className="taskDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        <div className="actionBox">
          <ul className="commentList">
            {comments.map(function(comment) {
              return(
                <C.Comment data={comment} key={comment._id} />
              )
            })
            }
          </ul>
        </div>
        <C.CommentForm />
      </div>
      </div>
    )
  }
});