import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBView, MDBCarouselItem, MDBMask, MDBContainer } from
"mdbreact";
import Mainimg1 from "../image/GlitterPurseMain.png";
import Mainimg2 from "../image/ParkarMain.png"
import Mainimg3 from "../image/MTMMain.png"
const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1"> <a href="/itemDetail/ongoing/0">
          <MDBView>
            <img
              className="d-block w-100"
              src={Mainimg1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView></a>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2"><a href="/itemDetail/ongoing/6">
          <MDBView>
            <img
              className="d-block w-100"
              src={Mainimg2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView></a>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3"><a href="/itemDetail/ongoing/8">
          <MDBView>
            <img
              className="d-block w-100"
              src={Mainimg3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView></a>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;