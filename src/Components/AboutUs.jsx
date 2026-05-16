// import React from 'react';
// import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
// import CHAboutImg from '../Assets/CHImg3.jpeg';
// //  import CHBackground1 from '../Assets/CHBackground.jpg';

// const AboutUs = () => {
//   const images = [
//     { src: require('../Assets/CHImg2.jpg'), alt: 'Image 1' },
//     { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
//     { src: require('../Assets/CHImg3.jpeg'), alt: 'Image 3' },
//     { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
//     // { src: require('../Assets/CHImg1.jpg'), alt: 'Image 2' },
//     // Add more image objects as needed
//   ];


//   const imageStyle = {
//     width: '250px', // Adjust width as desired
//     height: '250px', // Adjust height as desired
//     objectFit: 'cover', // Ensures image fills card area while maintaining aspect ratio
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };

//   const cardStyle = {
//     margin: '20px', // Adds margin around the card
   
//     // justifyContent: 'center',
//     alignItems: 'center',
//   };

//   return (
//     <Container fluid className="about-us">
//     {/* <Container fluid className="about-us" style={backgroundImageStyle}> */}
//       <Row>
//         <Col md={6} className="about-us-text">
//           <h1>About Us</h1>
//           <p>
//           At CH Vegetables, we take pride in over a decade of experience delivering the freshest, highest-quality vegetables to our valued customers. With 10+ years in the wholesale and retail vegetable industry, we have built a strong reputation for excellence and reliability.
//           </p>
//         </Col>
//         <Col md={6} className="about-us-image">
//           <Image src={CHAboutImg} alt="Company Image" fluid />
//         </Col>
//       </Row>

//       <Row className="image-list">
//         <CardGroup>
//           {images.map((image, index) => (
//             <Col key={index} md={3}>
//               <Card style={cardStyle}>
//                 <Card.Img variant="top" style={imageStyle} src={image.src} alt={image.alt} />
//               </Card>
//             </Col>
//           ))}
//         </CardGroup>
//       </Row>
//     </Container>
//   );
// };

// export default AboutUs;


import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import CHAboutImg from '../Assets/CHImg3.jpeg';
import img1 from '../Assets/CHImg1.jpg';
import img2 from '../Assets/CHImg2.jpg';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  const showcaseImages = [
    { src: img2, alt: 'Fresh Produce Selection' },
    { src: img1, alt: 'Wholesale Distribution' },
    { src: CHAboutImg, alt: 'Quality Check Process' },
    { src: img1, alt: 'Farm Fresh Logistics' },
  ];

  return (
    <Container fluid className="about-container px-0">
      {/* Top Split Banner Section */}
      <Row className="align-items-center g-0 hero-split-row">
        <Col lg={6} className="text-content-pane order-2 order-lg-1">
          <div className="inner-text-wrapper">
            <span className="subtitle-badge">ESTABLISHED TRADITION</span>
            <h2 className="about-title">About Our Legacy</h2>
            <div className="gold-accent-line"></div>
            <p className="about-description">
              At CH Vegetables, we take pride in over a decade of experience delivering 
              the freshest, highest-quality vegetables to our valued customers. With 10+ years 
              in the wholesale and retail vegetable industry, we have built a strong reputation 
              for excellence, transparency, and uncompromised reliability.
            </p>
            <p className="about-description-sub">
              We connect directly with local growers to bridge the gap between fields and your 
              kitchens, ensuring every delivery meets global standards of health and hygiene.
            </p>
          </div>
        </Col>
        
        <Col lg={6} className="image-content-pane order-1 order-lg-2">
          <div className="main-image-frame">
            <Image src={CHAboutImg} alt="CH Vegetables Premium Warehouse" fluid className="hero-pane-img" />
          </div>
        </Col>
      </Row>

      {/* Grid Showcase Gallery Section */}
      <div className="gallery-showcase-wrapper">
        <h3 className="gallery-section-title text-center">Glimpses of Excellence</h3>
        <Row xs={1} sm={2} md={4} className="g-4 showcase-grid-row">
          {showcaseImages.map((image, index) => (
            <Col key={index}>
              <Card className="showcase-card">
                <div className="showcase-img-container">
                  <Card.Img variant="top" src={image.src} alt={image.alt} />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default AboutUs;