import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Flower from "../../Assets/Projects/Flower.png";
import local from "../../Assets/Projects/local.png";
import Music from "../../Assets/Projects/Music.png";
import Orphanage from "../../Assets/Projects/Orphanage.png";
import food from "../../Assets/Projects/food zone.png";
import Barber from "../../Assets/Projects/Barber.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Orphanage}
              isBlog={false}
              title="Orphanage-Donation-System"
              description="The Orphanage Donation System is a web-based platform designed to simplify and promote donations to orphanages. It connects donors with registered orphanages, enabling them to contribute funds or essential items easily and securely. The system ensures transparency and builds trust between donors and institutions. Developed using HTML, CSS, JavaScript, and Bootstrap for the frontend, PHP for backend logic, and MySQL for the database, the project is hosted on Vercel (frontend) and tested locally using XAMPP for backend services."
              ghLink="https://github.com/shreyaj2301/Orphanage-Donation-System"
              demoLink="https://shreyaj2301.github.io/Orphanage-Donation-System/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Barber}
              isBlog={false}
              title="Barber-shop-Website"
              description="The Fama Barber Shop & Beauty Salon is a visually appealing and fully responsive landing page designed for a local grooming business. It effectively showcases the salon's services, operating hours, pricing, and contact details while offering a clean and modern user interface. The site includes smooth scrolling, animations, service highlights, and call-to-action buttons to enhance the user experience and engagement.
Developed using HTML, CSS, and JavaScript for the frontend, with a focus on modern design principles and user-friendly layout. The project is hosted on Vercel, ensuring fast and reliable deployment."
              ghLink="https://github.com/shreyaj2301/Barber-shop-Website"
              demoLink="https://barber-shop-website-mz8m05qmh-shreyajadhav309s-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music-Player"
              description="The Music Player is a sleek and interactive web-based audio player that allows users to play, pause, skip, and navigate through a curated playlist of songs. It features a dynamic UI with real-time song title and artist display, progress bar animation, and responsive controls for a smooth user experience.
              Developed using HTML, CSS, and JavaScript, this project focuses on DOM manipulation, event handling, and custom styling to simulate the core functionalities of a basic music player. "
              ghLink="https://github.com/shreyaj2301/Music-Player"
              demoLink="https://shreyaj2301.github.io/Music-Player/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Flower}
              isBlog={false}
              title="Online Flower Services"
              description="The Online Flower Services website is a beautifully designed, single-page e-commerce platform created for a flower delivery business. It allows users to explore various flower collections, view pricing, and place orders for special occasions. The landing page features visually rich sections, smooth scrolling, engaging animations, and a responsive layout optimized for all devices.
                  Developed using HTML, CSS, and JavaScript for the frontend, the site emphasizes an intuitive user experience and clean visual design."
              ghLink="https://github.com/shreyaj2301/Online-Flower-Sevices"
              demoLink="https://online-flower-sevices.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food zone"
              description="Food Zone App is a responsive React-based food ordering web application where users can browse a variety of food items, explore categories, and add dishes to their cart. Built with a modern UI and smooth navigation, it provides a simple, user-friendly experience for discovering and ordering food online."
              ghLink="https://github.com/shreyaj2301/React-Food-Zone"
              demoLink="https://react-food-zone1.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={local}
              isBlog={false}
              title="Local Market Place"
              description=" Local Market Place is a React-based web app designed for buying and selling products within a local community. It allows users to explore a range of items, view product details, and connect with sellers. The app focuses on a simple, marketplace-style interface for local trading."
              ghLink="https://github.com/shreyaj2301/Local-Market-Place"
               demoLink="https://local-market-place.vercel.app/"     
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
