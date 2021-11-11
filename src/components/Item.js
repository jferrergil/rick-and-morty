import React from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

export const Item = ({ cartoon }) => {
  const dispatch = useDispatch();

  return (
    <li className="list">
      <img className="list-img" src={cartoon.image} />
      <p className="list-p">{cartoon.name}</p>
    </li>
  );
};
