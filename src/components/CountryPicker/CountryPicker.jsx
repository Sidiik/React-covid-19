import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import { FormControl, NativeSelect, Typography } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
function CountryPicker({ handleChangeCountry }) {
  const [fetchCountry, setFetchCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountry(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchCountry]);

  console.log(fetchCountry);
  return (
    <div className={styles.container}>
      <Typography className={styles.text} color="textSecondary" variant="h5">
        Pickup a country
      </Typography>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleChangeCountry(e.target.value)}
        >
          {fetchCountry.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
