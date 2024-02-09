const getPrice = (rating) => {
  if (rating >= 4) {
    return Math.floor(Math.random() * (60 - 40) + 40) + 0.99;
  } else if (rating < 4) {
    return Math.floor(Math.random() * (40 - 20) + 20) + 0.99;
  }
};

export default getPrice;
