import { computePropsForButton } from "./button/button.utils";

export type A11YTypes = "button" | "link";

const UTILITIES: { [x in A11YTypes]: any } = {
  button: computePropsForButton,
  link: computePropsForButton,
};

export interface HTMLProps {
  onClick: any;
}

export const computeProps = (type?: A11YTypes, props?: HTMLProps): any => {
  if (!type) {
    return;
  }

  const utils = UTILITIES[type];
  const output = utils?.(props);
  return output;
};
