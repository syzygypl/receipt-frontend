import React from "react";
import { Link } from "react-router-dom";

const navStyles = {
  display: "flex",
  justifyContent: "space-around",
  borderBottom: "solid 1px grey",
  padding: '10px',
};

const Navigation = () => {
  return (
    <div style={navStyles}>
      <Link to="/">Welcome Page</Link>

      <Link to="/event-create">Create event</Link>

      <Link to="/login">Login</Link>

      <Link to="/event-edit">Edit event</Link>

      <Link to="/payment">Payment</Link>
    </div>
  );
};

export default Navigation;
