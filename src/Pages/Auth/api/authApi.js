import { getAPI, postApi, postAPISignup } from "../../../Api/ApiRequest";

export async function apiLogin(email1, password1) {
  return postApi(`https://localhost:7086/api/User/login?`, {
    email: email1,
    password: password1,
  });
}

export async function apiSignup(
  firstName1,
  lastName1,
  email1,
  password1,
  confirm1
) {
  return postAPISignup(`https://localhost:7086/api/User/register?`, {
    firstName: firstName1,
    lastName: lastName1,
    email: email1,
    password: password1,
    confirmPassword: confirm1,
  });
}

export async function apiGetUser() {
  return getAPI(`https://localhost:7086/api/User`);
}
