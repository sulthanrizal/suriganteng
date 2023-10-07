import React, { Component } from "react";
import { Alert, Badge, Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import "./css/Nickname.css"
class Tugas1 extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Alert variant="secondary" witdh="100px">Website React Boostrap</Alert>
                    </Col>
                    <Col></Col>
                    <Col> <Button variant="primary">Notifications
                        <Badge variant="dark">9</Badge>
                    </Button>
                        <Button variant="primary">Message
                            <Badge variant="dark">19</Badge>
                        </Button>
                    </Col>
                    <Col>
                        <div id="img">
                            <img src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                                alt="NickName"
                                witdh={35}
                                height={35} />

                            <h4>Suri</h4>
                        </div>

                    </Col>

                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Alert>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                                <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
                            </Breadcrumb>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <img src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
                                alt="Gambar Diego"
                                width={250}
                                height={180} />
                            <h4>Diego Godin Ukir Rekor Special Lawan Thailand</h4>
                            <p>Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailand di final piala Tiongkok. Diego Godin boleh berbangga setelah menjadi.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                                alt="Neymar"
                                witdh={150}
                                height={180}
                            />
                            <h4>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h4>
                            <p>Ayah sang pemain bintang Brazil berusaha meredam rumor ketertarikan Madrid. Neymar sednag berdiskusi dengan Paris Saint-Germain soal perpanjang kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <img src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                                alt="England"
                                witdh={150}
                                height={180}
                            />
                            <h4>Inggris Mau Jadi Negara Terbaik Di Dunia</h4>
                            <p>Kumpulan talenta yang dimiliki Inggris saat ini membuat Barkley sangat optimis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyak nya talenta yang muncul sekarang ini.</p>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <img src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                                alt="Rizki Fauzi"
                                witdh={150}
                                height={180}
                            />
                            <h4>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h4>
                            <p>Gelandang timnas nasional(timnas) Indonesia U-23 , Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pemungkasan grup K.</p>
                        </Card>

                    </Col>

                </Row>
            </Container >
        )
    }
}
export default Tugas1;