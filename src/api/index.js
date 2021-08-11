import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = BASE_URL;
  if (country) {
    changeableUrl = `${BASE_URL}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, lastUpdate, deaths },
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, lastUpdate, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${BASE_URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
