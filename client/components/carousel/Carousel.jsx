C.Carousel = React.createClass({
  
  render(){
    let items = 20;
    return(
      <div className="carousel slide" data-ride="carousel">
        
        <C.defaultCarouselIndicators />

        <div className="carousel-inner" role="listbox">
          // <C.CarouselItem  />
        </div>

        <C.defaultCarouselArrows />
        
      </div>

    )
  }
})