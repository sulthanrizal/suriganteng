import React, { Component } from "react";
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Carousel,
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Row,
  Image,
  Figure,
  ListGroup,
  Modal
} from "react-bootstrap";
// import Tugas1 from "./tugas1_boostrap";
class App extends Component {
  render() {
    return (


      <Container>
        <Alert variant="dark ">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Info</Breadcrumb.Item>
          </Breadcrumb>
        </Alert>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
              alt="Gambar Travel 1"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah 1</h3>
              <p>Dapatkan Promo Tiket Pesawat Murah 1</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
              alt="Gambar Travel 2"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah 2</h3>
              <p>Dapatkan Promo Tiket Pesawat Murah 2</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
              alt="Gambar Travel 3"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah 3</h3>
              <p>Dapatkan Promo Tiket Pesawat Murah 3</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <br />
        <br />


        <Row>
          <Col>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
              alt="Makanan Sate"
              width={54}
              height={54}
              className="mr-3" />

            <h5>Makanan Sate</h5>
            <p>Makanan sate ini terbuat dari daging</p>

          </Col>
          <Col> <img
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
            alt="Makanan Sate"
            width={54}
            height={54}
            className="mr-3" />
            <h5>Makanan Sate</h5>
            <p>Makanan sate ini terbuat dari daging</p></Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="danger">User yang kamu masukan salah</Alert>
          </Col>
          <Col>
            <h5>Pesannya adalah</h5>
            <Badge variant="secondary">Benar</Badge>

            <Button variant="primary">
              Profile  <Badge variant="light">9</Badge>
            </Button>
          </Col>
          <Col>
            <Button variant="dark">Kirim</Button>
            <br />
            <ButtonToolbar aria-label="Toolbar with button groups">

              <ButtonGroup className="mr-2" aria-label="Frist group">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
              </ButtonGroup>

              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button>8</Button>
              </ButtonGroup>

            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                variant="top"
              />
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Sate adalah makanan khas yang mendunia</Card.Text>
                <Button variant="primary">Visit Indonesia</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle varian="succes">Pilih Menu</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item herf="/"> Sate</Dropdown.Item>
                <Dropdown.Item herf="/"> Ayam</Dropdown.Item>
                <Dropdown.Item herf="/"> Ikan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <br />
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nama" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Masukan Email" />
                <Form.Text className="text-muted">Kami tidak akan menyalahgunakan email anda</Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Masukan Password" />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Check type="checkbox" label="Kami Setuju" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </Col>
          <Col>
            < InputGroup className="mb-3">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl placeholder="Username" />
            </InputGroup>

            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg"
              roundedCircle
            />
            <Figure>
              <Figure.Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                alt="Nasi Padang" width={270} height={280} />
              <Figure.Caption>
                Nasi Padang , Makanan Melegenda Asal Indonesia
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Nasi Padang</ListGroup.Item>
              <ListGroup.Item>Sate Madura</ListGroup.Item>
              <ListGroup.Item>Ayam Geprek</ListGroup.Item>
              <ListGroup.Item>Bebek Panggang</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Modal.Dialog >
              <Modal.Header closeButton>
                <Modal.Title>Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Simpan Data Pelanggan</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save Change</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
          <Col>Kolom 3</Col>
        </Row>
      </Container>
    )
  };
}

export default App;
