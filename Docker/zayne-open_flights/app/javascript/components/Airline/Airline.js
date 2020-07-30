import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((res) => {
        setAirline(res.data);
        setLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);

  console.log(airline);

  return (
    <Wrapper>
      <Column>
        <Main>
          {loaded && (
            <Header
              attributes={airline.data.attributes}
              reviews={airline.included}
            />
          )}
          <div className="reviews"></div>
        </Main>
      </Column>
      <Column>
        <div className="review-form">[Review Form Goes Here.]</div>
      </Column>
    </Wrapper>
  );
};

export default Airline;
