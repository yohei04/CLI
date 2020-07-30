import React from 'react';

const Header = ({ attributes, reviews }) => {
  return (
    <div className="wrapper">
      <h1>
        <img src={attributes.image_url} alt={attributes.name} />
        {attributes.name}
      </h1>
      <div>
        <div className="totalReviews">{reviews.length} User Reviews</div>
        <div className="startRating"></div>
        <div className="totalOutOf">{attributes.avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
