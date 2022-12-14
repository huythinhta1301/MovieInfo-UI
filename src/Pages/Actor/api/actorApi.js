import { getAPI } from "../../../Api/ApiRequest";

export async function apiGetActorList(limit, name, gender) {
  const res = await getAPI(
    `https://localhost:7086/api/Actor/filter?limit=${limit}&name=${name}&gender=${gender}`
  );
  return res;
}
