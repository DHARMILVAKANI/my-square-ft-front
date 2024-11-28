import React from 'react';

const BlogCard = ({ image, date, month, title, description, link }) => {
  return (
    <article className="card blog__card h-100">
      <a className="card-img" href={link}>
        <img src={image} alt="Blog Image" />
      </a>
      <div className="card-body">
        <div className="card-date text-center" style={{ background: '#336699' }}>
          <h4 className="day">{date}</h4>
          <span className="month">{month}</span>
        </div>
        <h4 className="card-title mt-3 mb-3 ">
          <a className="text-decoration-none" href={link}>
            {title}
          </a>
        </h4>
        <p className="mb-3" style={{ color: '#8b8989' }}>
          {description}
        </p>
        <a className="text-decoration-none" href={link} style={{ color: '#FF6600' }}>
          Read More
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
