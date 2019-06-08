import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const navStyles = {
  display: "flex",
  justifyContent: "space-around",
  borderBottom: "solid 1px grey",
  padding: '10px',
};

const Navigation = () => {
  return (
    <div style={navStyles}>
      <Link>
        <RouterLink to="/">Welcome Page</RouterLink>
      </Link>

      <Link>
        <RouterLink to="/login">Login</RouterLink>
      </Link>

      <Link>
        <RouterLink to="/event-create">Create event</RouterLink>
      </Link>

      <Link>
        <RouterLink to="/event-edit">Edit event</RouterLink>
      </Link>

      <Link>
        <RouterLink to="/payment">Payment</RouterLink>
      </Link>
    </div>
  );
};

export default Navigation;
