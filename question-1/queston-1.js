function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject("Input is not an array");
      return;
    }

    const lowerCaseWordsArray = mixedArray
      .filter((item) => typeof item === "string")
      .map((word) => word.toLowerCase());

    if (lowerCaseWordsArray.length > 0) {
      resolve(lowerCaseWordsArray);
    } else {
      reject("No lowercase words found in the input array.");
    }
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
