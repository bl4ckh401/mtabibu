import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
function CarouselComponent(){
    return(
        <div className='carousel'>
            <Carousel infiniteLoop autoPlay useKeyboardArrows>
                <div>
                    <img src='../pexels-thirdman-.jpg' alt='Bart'/>
                </div>
                <div>
                    <img src='../pexels-anthony.jpg' alt='nikubad'/>
                </div>
                <div>
                    <img src='../pexels-cottonbro.jpg' alt='livemoments'/>
                </div>
            </Carousel>
        </div>
    );
}
export default CarouselComponent;