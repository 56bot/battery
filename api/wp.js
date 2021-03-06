import fetch from "isomorphic-unfetch";

const API_BASE = `https://admin.batteryagency.com/wp-json/wp/v2`;

export const makeGenericRequest = async (route) => {
  try {
    const req = await fetch(`${API_BASE}/${route}`);
    const json = await req.json();

    return {
      ...json,
    };
  } catch (e) {
    return {
      status: 500,
      error: e,
    };
  }
};

export const getRelatedPosts = async (type, id) => {
  try {
    const req = await fetch(`${API_BASE}/related/${type}/${id}`);
    const json = await req.json();

    return {
      results: json,
    };
  } catch (e) {
    return {
      status: 500,
      error: e,
    };
  }
};
