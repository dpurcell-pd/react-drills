import React from "react";

function Arrays() {
  const dogs = [
    { name: "Sparky", age: 5 },
    { name: "Spot", age: 5 },
    { name: "Ralph", age: 5 },
    { name: "Fido", age: 5 },
  ];

  const dogsJSX = dogs.map(dog => {
    return (
        <div>
            <h2>{dog.name}</h2>
            <p>{dog.age}</p>
        </div>
    )
  });

  return <div>{dogsJSX}</div>;
}

export default Arrays;
