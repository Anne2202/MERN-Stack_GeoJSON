import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

export default function ListOfProperties() {
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/properties")
      .then((response) => {
        console.log(response.data);
        setProperties(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {properties &&
        properties.map((property) => {
          return (
            <div key={property._id}>
              <h2>{property.title}</h2>
              <h5>from {property.owner.name}</h5>
              <h5>price: {property.price} $</h5>
              <h5>total area: {property.area} m²</h5>
              <h5>bedrooms: {property.bedrooms}</h5>
              <img src={property.image} alt="Property view" />
              <button onClick={()=>{
                navigate(`/properties/${property._id}`)
            }}>View more</button>
            </div>
          );
        })}
    </div>
  );
}
