import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as action from "../redux/cartoons/actionCreator";
import { Item } from "./Item";
import "./styles.css";

const List = () => {
  const { characters } = useSelector((state) => state.cartoonStore);
  //   const { info } = useSelector((state) => state.cartoonStore);
  const dispatch = useDispatch();

  useEffect(() => dispatch(action.loadCartoon()), [dispatch]);
  console.log(characters);
  const templateList = characters.map((cartoon) => {
    return <Item key={cartoon.id} cartoon={cartoon} />;
  });
  return (
    <div>
      <ul className="listPrincipal">{templateList}</ul>
    </div>
  );
};
export default List;
