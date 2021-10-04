import React, { ReactNode } from "react";
import { A11YTypes, computeProps } from "./core/index";

interface Props {
  children: ReactNode;
  actAs?: A11YTypes;
  onClick?: () => void;
}

const MakeA11Y: React.FC<Props> = (props: Props) => {
  const { children, actAs } = props;
  const retrievedProps = (children as any)?.props;
  const newComponent = React.cloneElement(
    children as any,
    computeProps(actAs, retrievedProps)
  );

  return <>{newComponent}</>;
};

export default MakeA11Y;
