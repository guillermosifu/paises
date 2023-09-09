import { Container, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFlags } from "../service";

const Detail = () => {
  const history = useNavigate();
  const { name } = useParams();

  const [country, setCountry] = useState({});

  const fecthCountry = async () => {
    const response = await getFlags(
      `https://restcountries.com/v3.1/name/${name}`
    );
    setCountry(response[0]);
  };

  useEffect(() => {
    fecthCountry();
  }, []);

  return (
    <Container>
      <Button variant="outlined" onClick={() => history(-1)}>
        Back
      </Button>
      {Object.keys(country).length > 0 && (
        <Grid
          container
          sx={{ height: "100vh" }}
          alignItems="center"
          spacing={3}
        >
          <Grid item md={6}>
            <img src={country.flags.svg} width={400} alt="" />
          </Grid>
          <Grid item={6}>
            <h3>{country.name.official}</h3>
            <Grid container spacing={3}>
              <Grid item={6}>
                <p>
                  <b>Native Name</b>:{country.name.common}
                </p>
                <p>
                  <b>Population</b>:{country.population}
                </p>
                <p>
                  <b>Region</b>: {country.region}
                </p>
                <p>
                  <b>SubRegion</b>:{country.subregion}
                </p>
                <p>
                  <b>Capital</b>:{country.capital}
                </p>
              </Grid>

              
              <Grid item={6}>
                <p>
                  <b>Top Level Domain</b>:{country.tld}
                </p>
                <p>
                  <b>Currencies</b>
                  {""}
                  {Object.keys(country.currencies).map((currenci) => (
                    <span>{currenci}</span>
                  ))}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Detail;
