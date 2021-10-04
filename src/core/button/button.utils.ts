import { HTMLProps } from "..";

export const computePropsForButton = (props: HTMLProps): any => {
  const { onClick } = props;

  let newProps: any = {
    tabIndex: 0,
  };

  if (onClick) {
    newProps = {
      ...newProps,
      onKeyDown: (e: any) => {
        if (["Space", "Enter"].includes(e?.nativeEvent.code)) {
          return;
        }

        onClick();
      },
    };
  }

  return { ...props, ...newProps };
};
