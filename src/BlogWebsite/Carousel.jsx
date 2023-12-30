import React, { useState } from "react";
import "./BlogCSS/Blog.css";

const words = [
  {
    english: 'Student',
    bangla: 'ছাত্র'
  },
  {
    english: 'Ant',
    bangla: 'পিপীলিকা'
  }
]

export default function Carousel() {
  const [lang, setLang] = useState(true);
  const handleChangeLang = () => {
    setLang((prev) => !prev);
  }
  return (
    <>
      <div>
        {
          lang ? words[0].english : words[0].bangla
        }
      </div>
      <button className="btn btn-primary" onClick={handleChangeLang}>
        {
          lang ? 'Bangla' : 'English'
        }
      </button>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade container mt-5 "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active" id="first">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="img/kamrul.1jpg.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <h3 className="LongTitle">Live with Hablu </h3>
                <h3 className="LongTitle">Live with Hablu </h3>
                <p className="LongTitle">
                  Google LLC is an American multinational technology company
                  focusing on artificial intelligence, online advertising,
                  search engine technology, cloud computing, computer software,
                  quantum computing, e-commerce, and consumer electronics.
                </p>
                <p className="channelName">{lang ? 'Kamrul Programmer' : 'কামরুল প্রোগ্রামার'}</p>
                <p className="ShortTitle">26 December 2023</p>
              </div>
            </div>
          </div>

          <div class="carousel-item " hidden={true} id="second">
            <div className="row">
              <div className="col-md-6">
                <img src="img/kamrul.jpg" class="d-block w-100" alt="..." />
              </div>
              <div className="col-md-6">
                <p className="ShortTitle">aaaaaaaaaaaaaaaaaaa</p>
                <h3 className="LongTitle">asdasdsadsad </h3>
                <p className="ShortTitle">
                  Google LLC is an American multinational technology company
                  focusing on artificial intelligence, online advertising,
                  search engine technology, cloud computing, computer software,
                  quantum computing, e-commerce, and consumer electronics.
                </p>
                <p className="channelName">Kamrul Programmer</p>
                <p className="ShortTitle">26 December 2023</p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      <br />
    </>
  );
}
