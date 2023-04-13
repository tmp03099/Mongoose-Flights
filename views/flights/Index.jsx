const React = require("react");
const navBar = {
  margin: "10px",
  borderRadius: "5px",
  padding: "7px",
  background: "blue",
  color: "white",
};

function Index({ flights }) {
  return (
    <div>
      <nav>
        <a style={navBar} href="/flights">
          All FLIGHTS
        </a>
        <a style={navBar} href="/flights/new">
          ADD FLIGHTS
        </a>
      </nav>

      <h1>List of all Flights</h1>
      <div>
        {flights.map((flight, i) => {
          return (
            <p key={i}>
              AirLine: {flight.airline} <br />
              Flight Number: {flight.flightNo} <br />
              Departs: {flight.departs.toLocaleString()}
            </p>
          );
        })}
      </div>
    </div>
  );
}
module.exports = Index;
