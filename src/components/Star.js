/** @format */

const Star = ({ isCompleteStar, fillColor, productTitle, StopOffset }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="brown"
      strokeWidth="5px"
      height={20}
      fill={isCompleteStar ? fillColor : `url(${"#" + productTitle})`}
      width={20}
      viewBox="0 0 576 512"
    >
      {!isCompleteStar && (
        <defs>
          <linearGradient id={productTitle}>
            {/* I created two identical stops to produce hard stops of color gradient */}
            <stop offset="0" stopColor="#FFD700" />
            <stop offset={StopOffset} stopColor="#FFD700" />
            <stop offset={StopOffset} stopColor="white" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
      )}
      {/*! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>
  );
};

export default Star;
