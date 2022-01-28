const getSales = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/sale/';

  try {
    const request = await fetch(url);
    const data = await request.json();
    return { data, request };
  } catch (e) {
    console.log(e);
    return { e };
  }
};

const getProductList = async () => {
  const url = 'https://lambda-sales-system-api.herokuapp.com/api/product/';

  try {
    const request = await fetch(url);
    const data = await request.json();
    return { data, request };
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
    return { data, request };
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
  console.log(form);
  console.log(Object.fromEntries(formData.entries()));
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
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
};
