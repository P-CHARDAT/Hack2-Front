import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return <div>
      <Link to="/Category">
        <button>Category</button>
      </Link>
      <Link to="/CategoryVote">
        <button>CategoryVote</button>
      </Link>

  </div>;
}

export default Login;
