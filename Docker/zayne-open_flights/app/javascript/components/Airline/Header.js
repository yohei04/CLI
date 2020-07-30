import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size: 20px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`;

const Header = ({ attributes, reviews }) => {
  return (
    <Wrapper>
      <h1>
        <img src={attributes.image_url} alt={attributes.name} />
        {attributes.name}
      </h1>
      <div>
        <TotalReviews>{reviews.length} User Reviews</TotalReviews>
        <div className="startRating"></div>
        <TotalOutOf>{attributes.avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default Header;
