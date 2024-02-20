import React from "react";
import { Col, Row } from "react-bootstrap";


import {
 
 
  DiPython,
 
  
} from "react-icons/di";
import { TbSql } from "react-icons/tb";

import { FaLinux } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaLinux />
      </Col>
      
      

      
      
    </Row>
  );
}

export default Techstack;
