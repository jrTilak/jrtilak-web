import React from "react";
import handleGAEvent, { IGAEvent } from "@/utils/handleGAEvent";
import { Button, ButtonProps } from "../ui/button";

type GAButtonProps = ButtonProps & {
  ga: IGAEvent;
};

const GAButton = React.forwardRef<HTMLButtonElement, GAButtonProps>(
  ({ children, onClick, ga, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        onClick={(...args) => {
          if (props.disabled) return;
          if (onClick) {
            onClick(...args);
          }
          handleGAEvent(ga);
        }}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GAButton.displayName = "GAButton";

export default GAButton;
