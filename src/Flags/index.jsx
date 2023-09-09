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
} from "@mui/material";

const Flags = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async (url) => {
    const response = await getFlags(url);
    setCountries(response);
    console.log(response);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item md={6}>
          <TextField label="Search your contrie" fullWidth />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Region</InputLabel>
            <Select label="Filter by Region">
              <MenuItem value="all">Todas Las Regiiones</MenuItem>
              <MenuItem value="africa">Africa</MenuItem>
              <MenuItem value="americas">Americas</MenuItem>
              <MenuItem value="asia">Asia</MenuItem>
              <MenuItem value="europe">Europe</MenuItem>
              <MenuItem value="oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Flags;
