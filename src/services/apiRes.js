import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api/menu";

export async function getMenu() {
  try {
    const getData = await axios(API_URL);
    console.log(getData.data);
    return getData.data;
  } catch (error) {
    console.log(error);
  }
  return;
}
