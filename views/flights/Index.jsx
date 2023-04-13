const React = require("react");
function Index({ flights }) {
  return (
    <div>
      <h1>List of all Flights</h1>
      {flights.map((flight, idx) => {
        return (
          <div>
            {flight.airLine} {flight.flightNo} {flight.departs}
          </div>
        );
      })}
    </div>
  );
}
module.exports = Index;
