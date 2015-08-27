C.Comment = React.createClass({

  render(){
    let self = this.props.data,
        rawMarkup = marked(self.text.toString(), { sanitize: true })
    return(
      <li>
        <div className="commenterImage">
          <img src="http://lorempixel.com/50/50/" />
        </div>
        <div className="commentText">
          <div className="comment">
            <h4 className="commentAuthor">
              {self.author}
            </h4>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
          </div>
        </div>
      </li>
    );
  }
});