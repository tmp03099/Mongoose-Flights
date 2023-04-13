const React = require("react");
function New() {
  return (
    <div>
      <h1>New Flights</h1>
      <form action="/flights" method="POST">
        Airline: <input type="text" name="airline" />
        <br />
        Flight Number: <input type="text" name="flightNo" />
        <br />
        Departs: <input type="datetime-local" name="depart" />
        <br />
        <input type="submit" name="" value="Create Flight" />
      </form>
    </div>
  );
}
module.exports = New;
