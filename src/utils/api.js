const getSales = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/sale/';

  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;

  } catch (e) {
    console.log(e);
    return e;
  }

};

export { getSales };
