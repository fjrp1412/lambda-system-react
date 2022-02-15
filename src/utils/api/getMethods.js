const BASE_URL = 'https://lambda-sales-system-api.herokuapp.com/api/';

const getSales = async token => {
  try {
    const request = await fetch(`${BASE_URL}sale/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await request.json();
    return data;
  } catch (e) {
    return e;
  }
};

const getProductList = async token => {
  try {
    const request = await fetch(`${BASE_URL}product/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await request.json();
    return data;
  } catch (e) {
    return { e };
  }
};

const getClientsList = async token => {
  try {
    const request = await fetch(`${BASE_URL}client/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await request.json();
    return data;
  } catch (e) {
    return { e };
  }
};

const getSalesmanList = async token => {
  try {
    const request = await fetch(`${BASE_URL}salesman/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await request.json();
    return data;
  } catch (e) {
    return { e };
  }
};

const getSaleDetail = async ({ id, token }) => {
  try {
    const request = await fetch(`${BASE_URL}sale/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data = await request.json();
    return { data, request };
  } catch (e) {
    return { e };
  }
};

export {
  getSales,
  getProductList,
  getClientsList,
  getSalesmanList,
  getSaleDetail,
};
