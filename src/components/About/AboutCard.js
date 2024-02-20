import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple ">Saurabh Bais </span>
            from <span className="purple"> Vadodara, India.</span>
            <br />
            I am currently employed as a business analyst at Nielsen IQ.
            <br />
            Experience of working on Market Research & Retail Data Analytics.
            Experienced in performing large data operations using programming and database management tools.
            Proficiency in statistical tools and it’s application.
            Effectively handle large Nielsen retail store level audit data to draw insights through Descriptive and Inferential Analysis.
            <br />
            <br />
            
          </p>
          

          
         </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
