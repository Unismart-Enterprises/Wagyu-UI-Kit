import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 150 150" {...props}>
      <image width="150" height="150" href="https://ik.imagekit.io/sih3mpiiiaae/cattle-navbar-icon_yJVQFn_n-.svg" />
    </Svg>
  );
};

export default Icon;
