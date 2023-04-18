import axios from 'axios';

export async function fetchUrl(targetUrl) {
  let data;
  try {
    await axios.get(targetUrl).then(response => {
      data = response.data;
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
