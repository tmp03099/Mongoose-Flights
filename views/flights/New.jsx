const React = require("react");
const navBar = {
  margin: "10px",
  borderRadius: "5px",
  padding: "7px",
  background: "blue",
  color: "white",
};

function New() {
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
