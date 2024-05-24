import axios from "axios";

const Axios = async (jsonData, url) => {
  try {
    const response = await axios.post(url, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("POST request successful:", response);

    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export default Axios;
