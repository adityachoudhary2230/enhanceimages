import axios from "axios";

const API_KEY = "wx97o522tl6p42dv0";
const BASE_URL = "https://techhk.aoscdn.com/";

// 🔁 Main API function
export const EnhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
  

    const enhancedImageData = await pollForEnhancedImage(taskId);
 

    return enhancedImageData;
  } catch (error) {
    console.log("❌ Error fetching image:", error.message);
    throw error;
  }
};

// 📤 Upload Image
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "x-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("❌ Failed to upload image! Task ID not found.");
  }

  return data.data.task_id;
};

// ⏳ Polling for Enhanced Image
const pollForEnhancedImage = async (taskId, interval = 3000, maxAttempts = 20) => {
  let attempts = 0;

  const poll = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}api/tasks/visual/scale/${taskId}`,
        {
          headers: {
            "x-API-KEY": API_KEY,
          },
        }
      );

      const state = data?.data?.state;
      const progress = data?.data?.progress;

     

      if (state === 1) {
   
        return data.data.image;
      } else if (state === 5) {
        throw new Error("❌ Enhancement failed on server.");
      } else {
        attempts++;
        if (attempts >= maxAttempts) {
          throw new Error("⏰ Enhancement timed out.");
        }

        await new Promise((resolve) => setTimeout(resolve, interval));
        return await poll(); // recursive polling
      }
    } catch (error) {
      throw error;
    }
  };

  return await poll();
};
