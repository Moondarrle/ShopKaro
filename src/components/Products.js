import React from 'react';
import { Link } from 'react-router-dom'
const Products = (props) => {
  return (
    <div>
      <div className="card m-3" style={{ width: '18rem' }}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {props.source}
        </span>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
              the price is {props.price}$
          </p>
          <Link
            to={props.newsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
