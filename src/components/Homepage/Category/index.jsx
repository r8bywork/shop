import React from "react";
import Card from "./card";
import style from "./Category.module.scss";

const Category = () => {
  return (
    <div className={style.Category}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
};

export default Category;
