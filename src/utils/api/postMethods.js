const BASE_URL = 'https://lambda-sales-system-api.herokuapp.com/api/';

const postLogin = async ({ formData }) => {
  const dataObject = Object.fromEntries(formData.entries());

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const request = await fetch(`${BASE_URL}user/token/`, requestOptions);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    return e;
  }
};

const postSignUp = async ({ formData }) => {
  const dataObject = Object.fromEntries(formData.entries());

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const request = await fetch(`${BASE_URL}user/create/`, requestOptions);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    return e;
  }
};

const createClient = async ({ formData, token }) => {
  const requestOptions = {
    method: 'POST',
    body: formData,
    headers: {
      Authentication: `Token ${token}`,
    },
  };

  try {
    const request = await fetch(`${BASE_URL}client/`, requestOptions);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    return e;
  }
};

const createSale = async ({ sale, products, token }) => {
  const productsUrl = `${BASE_URL}sale/product-sale`;
  const saleUrl = `${BASE_URL}sale/`;

  try {
    const requestSale = await fetch(saleUrl, {
      method: 'POST',
      body: JSON.stringify(sale),
      headers: {
        'Content-Type': 'application/json',
        Authentication: `Token ${token}`,
      },
    });

    const requestProducts = await fetch(productsUrl, {
      method: 'post',
      body: JSON.stringify(products),
      headers: {
        'content-type': 'application/json',
        Authentication: `Token ${token}`,
      },
    });

    return requestProducts;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export { createClient, createSale, postLogin, postSignUp };
