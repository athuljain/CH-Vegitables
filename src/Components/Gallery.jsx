// import React, { useContext, useState } from 'react';
// import { Container, Row, Col, Carousel, Card, CardImg, CardGroup } from 'react-bootstrap';
// import { GalleryData } from '../Assets/GalleryData'; // Import the GalleryData array
// import { myContext } from '../Context';


// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { galleryImages } = useContext(myContext);
//   console.log(galleryImages); // For debugging

//   const handleSelect = (selectedIndex, event) => {
//     setCurrentIndex(selectedIndex);
//   };

  
  
//   return (
//     <Container fluid className="gallery">
//       <h1>Gallery</h1>
//       {/* Carousel at the top */}
//       <Row>
//         <Col md={12}>
//           <Carousel activeIndex={currentIndex} onSelect={handleSelect} >
//             {GalleryData.slice(0, 3).map((image, index) => (
//               <Carousel.Item key={index}>
//                 <img
//                   className="d-block w-100"
//                   src={image.src}
//                   alt={image.alt || 'Gallery Image'}
//                 />
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Col>
//       </Row>

//       {/* Image list after the carousel */}
//       <Row className="image-list">
//         <Col md={12}>
//           <h2>Image List</h2>
//           <CardGroup>
//             {GalleryData.map((image, index) => (
//               <Col key={index} md={3}>
//                 <Card>
//                   <CardImg variant="top" src={image.src} alt={image.alt + ' Photo'} />
//                 </Card>
//               </Col>
//             ))}
//           </CardGroup>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Gallery;


import React, { useContext, useState } from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import { GalleryData } from '../Assets/GalleryData'; 
import { myContext } from '../Context';
import '../Styles/Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { galleryImages } = useContext(myContext);

  // Fallback to Context data if GalleryData is ever missing/empty
  const displayImages = GalleryData && GalleryData.length > 0 ? GalleryData : (galleryImages || []);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Container fluid className="gallery-section px-0">
      {/* Dynamic Header */}
      <div className="gallery-header text-center">
        <span className="gallery-badge">VISUAL SHOWCASE</span>
        <h2 className="gallery-main-title">Our Fresh Collection</h2>
        <div className="gallery-gold-line"></div>
      </div>

      {/* Featured Carousel Spotlight */}
      {displayImages.length > 0 && (
        <Row className="justify-content-center mb-5 g-0">
          <Col lg={10} xl={8}>
            <div className="gallery-carousel-frame">
              <Carousel activeIndex={currentIndex} onSelect={handleSelect} fade indicators={true}>
                {displayImages.slice(0, 3).map((image, index) => (
                  <Carousel.Item key={index}>
                    <div className="gallery-slider-img-wrap">
                      <img
                        className="d-block w-100 gallery-slider-img"
                        src={image.src}
                        alt={image.alt || `Featured Slide ${index + 1}`}
                      />
                    </div>
                    {image.alt && (
                      <Carousel.Caption className="gallery-slider-caption">
                        <h5>{image.alt}</h5>
                      </Carousel.Caption>
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      )}

      {/* Responsive Seamless Grid Matrix */}
      <div className="grid-showcase-container">
        <h3 className="grid-section-title">Explore Entire Catalog</h3>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {displayImages.map((image, index) => (
            <Col key={index}>
              <Card className="gallery-grid-card">
                <div className="gallery-grid-img-wrap">
                  <Card.Img variant="top" src={image.src} alt={image.alt || 'Produce Image'} />
                  <div className="gallery-grid-overlay">
                    <span className="zoom-text-icon">View Freshness</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Gallery;