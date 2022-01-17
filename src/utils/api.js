const getSales = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/sale/';

  try {
    const request = await fetch(url);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    console.log(e);
    return {e};
  }
};

const getProductList = async() => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/product/';

  try {
    const request = await fetch(url);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    console.log(e);
    return {e};
  }

}

export { getSales, getProductList };
