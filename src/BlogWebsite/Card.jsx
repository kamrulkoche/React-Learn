import React from "react";
import "./BlogCSS/Card.css";

export default function Card(props) {
  return (
    <div className="container ">
      <h3 className="mb-3">Recent Post</h3>
      <div class="card">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.p}</p>
          <a href={props.link} class="btn btn-primary">
            {props.BtnName}
          </a>
        </div>
      </div>
    </div>
  );
}
