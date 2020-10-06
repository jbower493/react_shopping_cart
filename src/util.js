const formatCurrency = (num) => {
  return "$" + Number(num.toFixed(2)).toLocaleString() + "0 ";
};

export default formatCurrency;