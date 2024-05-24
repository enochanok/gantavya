import axios from "axios";

const BackgroundApi = async (imageUrl) => {
  try {
    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      {
        image_url: imageUrl,
        size: "auto",
      },
      {
        headers: {
          "X-Api-Key": "Qnk28tqXU23K43YVoPM18KAg",
        },
        responseType: "arraybuffer", // Important: to handle binary data
      }
    );
    return response;
  } catch (error) {
    console.error(
      "Error in BackgroundApi:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default BackgroundApi;
