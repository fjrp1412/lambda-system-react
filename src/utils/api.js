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

const getProductList = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/product/';

  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
    return { e };
  }
};

const getClientsList = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/client/';
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
    return { e };
  }
};

const getSalesmanList = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/salesman/';
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (e) {
    console.log(e);
    return { e };
  }
};

const getSaleDetail = async ({ id }) => {
  const url = `https://lambda-sales-system-api.herokuapp.com/api/sale/${id}/`;

  try {
    const request = await fetch(url);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    console.log(e);
    return { e };
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

export {
  getSales,
  getProductList,
  getClientsList,
  getSaleDetail,
  createClient,
  getSalesmanList,
};
