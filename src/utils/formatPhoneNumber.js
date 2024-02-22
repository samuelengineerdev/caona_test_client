const formatPhoneNumber = (number) => {
  let numericValue = number?.replace(/\D/g, "");
  
  if (numericValue?.length > 10) {
    numericValue = numericValue.slice(0, 10);
  }

  let formattedPhoneNumber = "";

  if (numericValue?.length > 0) {
    formattedPhoneNumber += "(";
  }
  if (numericValue?.length > 3) {
    formattedPhoneNumber += numericValue.slice(0, 3) + ") ";
    numericValue = numericValue.slice(3);
  }
  if (numericValue?.length > 3) {
    formattedPhoneNumber += numericValue.slice(0, 3) + "-";
    numericValue = numericValue.slice(3);
  }
  
  formattedPhoneNumber += numericValue;
  
  return formattedPhoneNumber;
};

export default formatPhoneNumber

