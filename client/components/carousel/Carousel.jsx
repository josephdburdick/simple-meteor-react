C.Carousel = React.createClass({
  
  render(){
    let number = 20,
        items = [],
        carouselItems;

    return(
      <div className="container">
        <div className="carousel slide" data-ride="carousel">
          
          <div className="carousel-inner" role="listbox">
            <C.CarouselItem isActive={true} />
            <C.CarouselItem />
            <C.CarouselItem />
            <C.CarouselItem />
            <C.CarouselItem />
            <C.CarouselItem />
            <C.CarouselItem />
            <C.CarouselItem />
          </div>
          
        </div>
      </div>

    )
  }
})