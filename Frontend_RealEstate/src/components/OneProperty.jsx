import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OneProperty() {
  const [property, setProperty] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties/${id}`)
      .then((response) => {
        console.log(response.data);
        setProperty(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {property && (
        <div>
          <h1>{property.title}</h1>
          <div>
            <h3>owner: {property.owner.name}</h3>
            <p>{property.owner.email}</p>
            <p>{property.owner.phoneNumber}</p>
          </div>
          <br></br>
          <p>{property.description}</p>

          <p>price: {property.price} $</p>
          <p>total area: {property.area} m²</p>
          <p>bedrooms: {property.bedrooms}</p>
          <img src={property.image} alt="Property view" />
          <div>
            {property.images.map((image, index) => (
              <img src={image} alt={`Property view ${index}`} key={index} />
            ))}
          </div>
          <p>advertised: {property.createdAt}</p>
        </div>
      )}
    </div>
  );
}
