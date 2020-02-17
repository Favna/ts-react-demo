import React, { FC } from "react";
import scss from "./Component.module.scss";

const Component: FC = () => (
  <h1 className={scss.title}>This header will have a red background!</h1>
);

export default Component;
