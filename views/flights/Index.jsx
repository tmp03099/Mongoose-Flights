const React = require("react");
function Index({ flights }) {
  return (
    <div>
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
