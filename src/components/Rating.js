/** @format */

import Star from "./Star";

const Rating = ({ product }) => {
  let rating = product?.rating;

  // I hard coded the array to be able to loop over it and render five stars
  let allStarsNum = [1, 2, 3, 4, 5];

  return allStarsNum.map((star) =>
    rating >= star ? (
      <Star isCompleteStar={true} fillColor="#FFD700" key={star} />
    ) : star - rating < 1 ? (
      <Star
        productTitle={product.title.split(" ").join("")}
        isCompleteStar={false}
        key={star}
      />
    ) : (
      <Star isCompleteStar={true} fillColor="white" key={star} />
    )
  );
};

export default Rating;
