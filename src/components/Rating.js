/** @format */

import Star from "./Star";

const Rating = ({ product }) => {
  let rating = product?.rating;

  const get_Stop_Offset_Value_For_Incomplete_star = () => {
    const num_After_Decimal_Point = rating.toString().split(".")[1];
    const stopOffsetValue =
      num_After_Decimal_Point.length > 1
        ? num_After_Decimal_Point
        : num_After_Decimal_Point + "0";

    return stopOffsetValue;
  };

  // I hard coded the array to be able to loop over it and render five stars
  let allStarsNum = [1, 2, 3, 4, 5];

  return allStarsNum.map((star) =>
    rating >= star ? (
      <Star isCompleteStar={true} fillColor="#FFD700" key={star} />
    ) : star - rating < 1 ? (
      <Star
        // product title is passed to give unique id for svg gradient.
        StopOffset={get_Stop_Offset_Value_For_Incomplete_star() + "%"}
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
