import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows , FaFileExcel, FaFilePowerpoint, FaFileWord} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFileExcel/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFilePowerpoint/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFileWord/>
      </Col>
     
      
    </Row>
  );
}

export default Toolstack;
