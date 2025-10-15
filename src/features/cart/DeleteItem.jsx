import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
};

export default DeleteItem;
