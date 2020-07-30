import React from 'react';

const ReviewForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          Have An Experience with {props.attributes.name}? Add Your Review!
        </div>
        <div>
          <input
            onChange={props.handleChange}
            type="text"
            name="title"
            placeholder="Review Title"
            value={props.review.title}
          />
        </div>
        <div>
          <input
            onChange={props.handleChange}
            type="text"
            name="description"
            placeholder="Review Description"
            value={props.review.description}
          />
        </div>
        <div>
          <div>
            <div>Rate This Airline</div>
            <div>[Rating options will go here.]</div>
          </div>
        </div>
        <button type="Submit">Create Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
