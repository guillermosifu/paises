import React from "react";

const Base = "https://restcountries.com/v3.1/all";

export const getFlags = async (url = Base) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.log(error.message);
  }
};


