C.CarouselItem = React.createClass({
  render(){
    return (
      <div className="item">
        <img src="http://placehold.it/800x600" alt="..." />
        <div className="carousel-caption">
          { Fake.sentence(12) }
        </div>
      </div>
    )
  }
});