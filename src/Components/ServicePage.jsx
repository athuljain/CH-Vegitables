
// import React from "react";
// import "../Styles/Service.css"
// import CHImg1 from '../Assets/chGallery (1).jpeg'
// import CHImg2 from '../Assets/chGallery (2).jpeg'
// import CHImg3 from '../Assets/chGallery (3).jpeg'
// import CHImg4 from '../Assets/chGallery (5).jpeg'


// const ServicePage = () => {
//   const services = [
//     {
//       title: "Wholesale Supply",
//       description:
//         "We provide fresh, high-quality vegetables in bulk for businesses, ensuring timely delivery and exceptional service.",
//       image: CHImg1,
//     },
//     {
//       title: "Retail Services",
//       description:
//         "Our retail outlets in Kerala and Karnataka offer a wide range of fresh vegetables, perfect for daily cooking needs.",
//       image: CHImg2,
//     },
//     {
//       title: "Farm-to-Table Freshness",
//       description:
//         "We source vegetables directly from trusted farms, guaranteeing freshness, nutrition, and premium quality.",
//       image: CHImg3,
//     },
//     {
//       title: "Custom Orders",
//       description:
//         "We accommodate custom orders for businesses and events, tailored to your specific needs.",
//       image: CHImg4,
//     },
//   ];

//   return (
//     <div className="services">
//       <header className="services-header">
//         <h1>Our Services</h1>
//         <p>At CH Vegetables, we are committed to delivering freshness and quality through a range of tailored services.</p>
//       </header>

//       <div className="services-grid">
//         {services.map((service, index) => (
//           <div key={index} className="service-card">
//             <img
//               src={service.image}
//               alt={service.title}
//               className="service-image"
//             />
//             <h2 className="service-title">{service.title}</h2>
//             <p className="service-description">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CHImg1 from '../Assets/chGallery (1).jpeg';
import CHImg2 from '../Assets/chGallery (2).jpeg';
import CHImg3 from '../Assets/chGallery (3).jpeg';
import CHImg4 from '../Assets/chGallery (5).jpeg';
import "../Styles/Service.css";

const ServicePage = () => {
  const services = [
    {
      title: "Wholesale Supply",
      description:
        "We provide fresh, high-quality vegetables in bulk for businesses, ensuring timely delivery and exceptional service.",
      image: CHImg1,
    },
    {
      title: "Retail Services",
      description:
        "Our retail outlets in Kerala and Karnataka offer a wide range of fresh vegetables, perfect for daily cooking needs.",
      image: CHImg2,
    },
    {
      title: "Farm-to-Table Freshness",
      description:
        "We source vegetables directly from trusted farms, guaranteeing freshness, nutrition, and premium quality.",
      image: CHImg3,
    },
    {
      title: "Custom Orders",
      description:
        "We accommodate custom orders for businesses and events, tailored to your specific needs.",
      image: CHImg4,
    },
  ];

  return (
    <section className="services-section-wrapper">
      <Container>
        {/* Section Header */}
        <header className="services-main-header text-center">
          <span className="services-badge">WHAT WE OFFER</span>
          <h2 className="services-main-title">Our Premium Services</h2>
          <div className="services-gold-line"></div>
          <p className="services-subtitle">
            At CH Vegetables, we are committed to delivering freshness and quality through a range of tailored solutions.
          </p>
        </header>

        {/* Services Responsive Grid */}
        <Row xs={1} sm={2} lg={4} className="g-4 services-grid-row">
          {services.map((service, index) => (
            <Col key={index} className="animate-on-scroll">
              <div className="premium-service-card">
                {/* Image Wrapper with Hover zoom */}
                <div className="service-img-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-image"
                  />
                  <div className="service-image-shimmer"></div>
                </div>
                
                {/* Content Details Block */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicePage;
