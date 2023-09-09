import{Container,Grid,Button} from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getFlags } from "../service";

const Detail = () => {

  const history = useNavigate()  
  const{name} = useParams()

  const[country,setCountry]=useState({})

  const fecthCountry = async ()=>{
    const response = await getFlags(
      `https://restcountries.com/v3.1/name/${name}`
    )
      setCountry(response[0])
  }
   
  useEffect(()=>{
    fecthCountry()
  },[])



  return (
   <Container>
    <Button variant="outlined" onClick={()=> history(-1)}>
        Back
    </Button>
    {Object.keys(country).length >0 && (
      <Grid container>
        <Grid item md={6}>
          <img src={country} alt="" />
        </Grid>
        <Grid item={6}>
         <h3>{country.name.official}</h3>
          <Grid container>
            <Grid item={6}>
          <p>Native Name :{country.name.official}</p>
         </Grid>
         <Grid item={6}>

         </Grid>
          </Grid>
         
        </Grid>
      </Grid>
    )}
   </Container>
  )
}

export default Detail;