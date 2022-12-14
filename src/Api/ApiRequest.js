import axios from "axios";

const getHeaders = () => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: token,
    "Content-type": "application/json",
  };
  return headers;
};

export async function getAPI(url) {
  const headers = getHeaders();
  const res = await axios({
    method: "get",
    url: `${url}`,
    headers: headers,
  });
  return res;
}

export async function postApi(url, body) {
  const headers = getHeaders();
  const res = await axios({
    method: "post",
    url: `${url}`,
    headers: headers,
    data: body,
  });
  return res;
}

export async function postAPISignup(url, body) {
  const headers = {
    "Content-type": "application/json",
  };
  const res = await axios({
    method: "post",
    url: `${url}`,
    headers: headers,
    data: body,
  });
  return res;
}
