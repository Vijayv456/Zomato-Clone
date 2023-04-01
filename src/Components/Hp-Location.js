import React from "react";

const locations = [
  { name: "T Nagar", places: "304 places" ,a:"/chennai/T Nagar"},
  { name: "Nungambakkam", places: "257 places" ,a:"/chennai/Nungambakkam"},
  { name: "Velachery", places: "402 places" ,a:"/chennai/Velachery" },
  { name: "Anna Nagar East", places: "286 places" ,a:"/chennai/Anna Nagar East"},
  { name: "Adyar", places: "173 places" ,a:"/chennai/Adyar"},
  { name: "Thuraipakkam", places: "220 places" ,a:"/chennai/Thuraipakkam"},
  { name: "Mylapore", places: "154 places" ,a:"/chennai/Mylapore"},
  { name: "Alwarpet", places: "117 places" ,a:"/chennai/Alwarpet"},
];
class HpLocation extends React.Component {
  render() {
    return (
      <div className="hp-location">
        <h2>Popular localities in and around Chennai</h2>
        <div className="hp-location-div">
          {locations.map(location=>{
            return(
                <div className="hp-location-div-div">
            <a href={location.a}>
              <div>
                <h3>{location.name}</h3>
                <p>{location.places}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </a>
          </div>
            )
          })}
          
        </div>
      </div>
    );
  }
}

export default HpLocation;
