const postLogin = async formData => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/user/token/';
  const dataObject = Object.fromEntries(formData.entries());

  console.log(dataObject);

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const request = await fetch(url, requestOptions);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    return e;
  }
};

const postSignUp = async formData => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/user/create/';
  const dataObject = Object.fromEntries(formData.entries());

  console.log(dataObject);

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const request = await fetch(url, requestOptions);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    return e;
  }
};

const createClient = async form => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/client/';
  const formData = new FormData(form);
  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  try {
    const request = await fetch(url, requestOptions);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    console.log(e);
    return e;
  }
};

const createSale = async (sale, products) => {
  const productsUrl =
    'https://lambda-sales-system-api.herokuapp.com/api/sale/product-sale';
  const saleUrl = 'https://lambda-sales-system-api.herokuapp.com/api/sale/';

  try {
    const requestSale = await fetch(saleUrl, {
      method: 'POST',
      body: JSON.stringify(sale),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const requestProducts = await fetch(productsUrl, {
      method: 'post',
      body: JSON.stringify(products),
      headers: {
        'content-type': 'application/json',
      },
    });

    return requestProducts;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export { createClient, createSale, postLogin, postSignUp };
