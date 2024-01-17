import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// backend URL
// const API_URL = "https://gmail-clone-l0ay.onrender.com/";
const API_URL = "http://localhost:8000";

const API_GMAIL = async (urlObject, payload, type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`,
    data: payload,
  });
};

export default API_GMAIL;
