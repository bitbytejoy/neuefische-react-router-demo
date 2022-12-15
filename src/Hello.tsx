import React from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function Hello () {
  const navigate = useNavigate();
  const params = useParams<{name: string}>();

  return (
    <div>
      <h1>Hello {params.name}</h1>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}