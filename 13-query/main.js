function getQueryString(params) {
  const queriesArr = Object.keys(params).reduce((acc, el) => {
    acc.push(`${el}=${params[el]}`);
    return acc;
  }, []);
  return queriesArr.join("&");
}

console.log(
  getQueryString({
    name: "Diana",
    age: 18,
    city: "Moscow",
  })
);
