import React, { useEffect } from "react";
import { useState } from "react";
import { getFlags } from "../service";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

const Flags = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  const fetchCountries = async (url) => {
    const response = await getFlags(url);
    setCountries(response);
    console.log(response);
  };

  const handleRegion = async (e) => {
    setRegion(e.target.value);
    //vamos a evlauar si el valo es igual a all entonces ejcutara el fetch
    if (e.target.value === "all") {
      fetchCountries();
      return;
    }
    setCountries([]);

    const response = await getFlags(
      `https://restcountries.com/v3.1/region/${e.target.value}`
    );
    setCountries(response);
  };

  //vamos a crear un funcion que filtre y se encrague de buscar los paises
  const handleSearchCountry = (e) => {
    // una buena practuca ees deciqeu que inice contando las 3 primeras letras
    const countryName = e.target.value;

    if (countryName.length === 0) {
      fetchCountries();
    }
    if (countryName.length >= 3) {
      //aca debemos iniciar la busqyeda
      //para poder hacer la busqueda debo transformar todo el text a uppercase o lowercase
      const filterCountries = countries.filter((country) =>
        country.name.common.toUpperCase().includes(countryName.toUpperCase())
      );
      setCountries(filterCountries);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <TextField
            label="Search your contrie"
            fullWidth
            onChange={handleSearchCountry}
          />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Region</InputLabel>
            <Select label="Filter by Region" onChange={handleRegion}>
              <MenuItem value="all">Todas Las Regiones</MenuItem>
              <MenuItem value="africa">Africa</MenuItem>
              <MenuItem value="americas">Americas</MenuItem>
              <MenuItem value="asia">Asia</MenuItem>
              <MenuItem value="europe">Europe</MenuItem>
              <MenuItem value="oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {countries.length > 0 ? (
          countries.map((country) => (
            <Grid item md={3} xs={12}>
              <Card>
                <CardMedia
                  component="img"
                  height={200}
                  image={country.flags.svg}
                />
                <CardContent>
                  <h4>{country.name.common}</h4>
                  <p>Population : {country.population}</p>
                  <p>Region : {country.region}</p>
                  <p>Capitak :{country.capital}</p>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <div>
            <CircularProgress />
            <h4>cargando..</h4>
          </div>
        )}
      </Grid>
    </Container>
  );
};

export default Flags;
