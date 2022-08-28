import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Contact Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              aperiam eveniet nostrum, optio temporibus ipsum in iusto
              voluptatum laudantium vero voluptatibus? Harum, quos molestias!
              Fugiat quidem libero natus vero dignissimos aspernatur assumenda
              incidunt repellendus perspiciatis iure nam veniam quos aut
              voluptas alias perferendis obcaecati voluptatibus eligendi, quis
              reiciendis ullam, in voluptatem deleniti illum? Alias, eius odit!
              Pariatur in officiis laborum doloribus molestias cupiditate ullam
              voluptates culpa nulla odio, praesentium blanditiis explicabo sit
              veniam sint, assumenda nam voluptate, harum dolor ratione. Dolorem
              voluptatem, vero ipsam vel distinctio ullam omnis fuga iure, a
              modi rem, accusamus quo? Accusantium, nostrum provident sit
              mollitia ipsam eius enim aperiam quibusdam ad doloremque, commodi
              cum excepturi nihil voluptatum. Corporis magnam delectus hic
              deserunt optio? Animi ipsam repudiandae rem alias dolorem
              exercitationem voluptatum dolores officiis in sapiente eligendi,
              cumque esse quae minima sed, odio consectetur officia voluptates
              distinctio illum corporis laboriosam id molestias doloribus? Esse
              voluptas inventore, minima in eos molestiae aut fugit aliquam
              aperiam reprehenderit? Atque earum vero quis dolore sunt illo.
              Culpa quod dolorum nemo rem quibusdam incidunt! Dignissimos optio
              reiciendis repudiandae sequi sunt laudantium dolor necessitatibus
              maxime tenetur dolorum quibusdam quidem consequuntur incidunt
              cupiditate aliquid minima asperiores ipsa unde voluptates, quaerat
              odit eos nesciunt!
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <RiWhatsappFill />
                  </td>
                  <td>Delicias Karla</td>
                  <td>0000-1111</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "50%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
