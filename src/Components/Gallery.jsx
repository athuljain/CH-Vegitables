import React, { useContext, useState } from 'react';
import { Container, Row, Col, Carousel, Card, CardImg, CardGroup } from 'react-bootstrap';
import { GalleryData } from '../Assets/GalleryData'; // Import the GalleryData array
import { myContext } from '../Context';


const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { galleryImages } = useContext(myContext);
  console.log(galleryImages); // For debugging

  const handleSelect = (selectedIndex, event) => {
    setCurrentIndex(selectedIndex);
  };

  
  
  return (
    <Container fluid className="gallery">
      <h1>Gallery</h1>
      {/* Carousel at the top */}
      <Row>
        <Col md={12}>
          <Carousel activeIndex={currentIndex} onSelect={handleSelect} >
            {GalleryData.slice(0, 3).map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt || 'Gallery Image'}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Image list after the carousel */}
      <Row className="image-list">
        <Col md={12}>
          <h2>Image List</h2>
          <CardGroup>
            {GalleryData.map((image, index) => (
              <Col key={index} md={3}>
                <Card>
                  <CardImg variant="top" src={image.src} alt={image.alt + ' Photo'} />
                </Card>
              </Col>
            ))}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
