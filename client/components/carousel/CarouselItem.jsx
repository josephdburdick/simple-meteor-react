C.CarouselItem = React.createClass({
  render(){
    let self = this,
        isActive = !!self.props.isActive ? 'active' : '',
        classes = ['item', isActive].join(' ');
    debugger;
    return (
      <div className={classes}>
        <img src="http://placehold.it/800x600" alt="..." />
        <div className="carousel-caption">
          { Fake.sentence(12) }
        </div>
      </div>
    )
  }
});