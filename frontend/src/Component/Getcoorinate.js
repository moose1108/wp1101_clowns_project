import React from "react";
import Geocode from "react-geocode";


const Getcoordinate = (address)=>{
    Geocode.setLanguage("zh-TW");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          return {lat ,lng}
        },
        (error) => {
          console.error(error);
        }
    );
}
export default Getcoordinate;
