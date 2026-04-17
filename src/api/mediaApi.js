import axios from "axios"

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXEL_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export async function fetchPhotos(query,page=1,per_page=30) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`
    },
    params: {
      query,
      page,
      per_page
    }
  });
  return response.data;
}

export async function fetchVideos(query,page=1,per_page=52) {
  const response = await axios.get('https://api.pexels.com/videos/search', {
    headers: {
      Authorization: PEXELS_KEY
    },
    params: {
      query,
      page,
      per_page
    }
  });
  return response.data;
}

export async function fetchGifs(query,limit=48) {
  const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: GIPHY_KEY,
      q: query,
      limit
    }
  });
  return response.data;
}

export async function fetchStickers(query,limit=48) {
  const response = await axios.get('https://api.giphy.com/v1/stickers/search', {
    params: {
      api_key: GIPHY_KEY,
      q: query,
      limit
    }
  });
  return response.data;
}