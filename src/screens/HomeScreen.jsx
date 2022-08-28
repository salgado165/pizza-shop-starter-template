import React from "react";
import AllPiza from "../pizza-data";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {AllPiza.map((pizza) => (
            <Col md={4}>
              <Pizza pizza= {pizza}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
