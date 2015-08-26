C.Carousel = React.createClass({
  
  render(){
    let number = 20,
        items = [],
        carouselItems;

    /*for (let i=0; i < number; i++){
      console.log(i);
      carouselItems = items.map(function(i){
        
        return(
          <C.CarouselItem />
        )
      })
    }*/


    return(
      <div className="container">
        <div className="carousel slide" data-ride="carousel">
          
          <div className="carousel-inner" role="listbox">
            <C.CarouselItem data={"isActive: true"} />
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