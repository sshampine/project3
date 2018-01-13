import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {

  render() {
    return (
        <Container fluid>

        {/* Hero Section */}
            <Jumbotron id="heroBg">
                <Container>
                    <h1> Welcome to the best Bitcoin Site Ever!</h1>
                    <p>This is where you can track everything you ever wanted</p>
                </Container>
            </Jumbotron>
        {/* Search Section */}
            <Container fluid id="bgSearch">
                <Container>
                    <Row>
                        <h1 class="text-center">Search your favorire Cryptocurrency</h1>
                    </Row>
                    <br/>
                    <Col size="md-4 lg-offset-4">
                        <form>
                            <Input
                                name="title"
                                placeholder="Enter Crypto Name Here"
                            />
                        </form>
                    </Col>
                    <img src="https://cdn-images-1.medium.com/max/1600/1*Bdjq17lCD-EeUyrswXaSFg.png" />
                </Container>
            </Container>
        {/* News Section */}
            <Container fluid id="bgNews">
                <Container>
                    <Row>
                        <h1 class="text-center">Read the latest on Cryptocurrency</h1>
                    </Row>
                    <br/>
                    <img src="https://images.techhive.com/images/idge/imported/article/cio/2012/04/26/fbtrend1-100337883-orig.jpg"/>
                </Container>
            </Container>
        {/* Footer */}
            <Container fluid id="footer">
                <Container>
                    <Row>
                        <p class="text-center">&copy; 2018 Scott | Robert | Greg</p>
                    </Row>
                </Container>
            </Container>

        </Container>
    );
  }
}

export default Home;
