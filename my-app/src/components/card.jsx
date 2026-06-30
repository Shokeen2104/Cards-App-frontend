import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {/* Top Section: Logo and Save Button */}
      <div className="top">
        <img src={props.brandLogo} alt="brand-logo" />
        <button><i className="ri-bookmark-line"></i> Save</button>
      </div>

      {/* Center Section: Company Details & Tags */}
      <div className="center">
        <h3>{props.company} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      {/* Bottom Section: Pay & Apply */}
      <div className="bottom">
        <h3>{props.pay}</h3>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;