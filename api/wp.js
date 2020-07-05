import fetch from "isomorphic-unfetch";

const API_BASE = `http://1234.56.digital/battery/wp-json/wp/v2`;

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
