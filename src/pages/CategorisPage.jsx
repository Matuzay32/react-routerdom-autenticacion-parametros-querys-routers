import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategorisPage() {
  const location = useLocation();

  const navigate = useNavigate();

  const handdleNext = () => {
    // query.set("limit", 100);

    query.set("skip", skip + limit);

    console.log(query.toString());

    navigate(`/categories?${query.toString()}`);
  };

  const query = new URLSearchParams(location.search);

  const skip = parseInt(query.get("skip")) || 0;

  const limit = parseInt(query.get("limit")) || 10;

  return (
    <div>
      <h1>Categories page</h1>

      <h1>skip: {skip}</h1>

      <h1>limit: {limit}</h1>

      <button onClick={handdleNext}>Next</button>
    </div>
  );
}
