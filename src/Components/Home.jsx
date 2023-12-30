import React from "react";
import Card from "../BlogWebsite/Card";
import Carousel from "../BlogWebsite/Carousel";
import Header from "../BlogWebsite/Header";
import Page from "./Page";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div class="container">
        <Carousel />
        <div class="row">
          <div class="col-md-4">
            <Card
              img="img/kamrul.1jpg.jpg"
              title="Card title 1"
              p=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              link=""
              BtnName="Go somewhere"
            />
          </div>
          <div class="col-md-4">
            <Card
              img="img/koche.jpeg"
              title="Card title 2"
              p=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              link=""
              BtnName="Go anywhere"
            />
          </div>
          <div class="col-md-4">
            <Card
              img="img/koche.jpeg"
              title="Card title 2"
              p=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              link=""
              BtnName="Go anywhere"
            />
          </div>
          <Page/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
