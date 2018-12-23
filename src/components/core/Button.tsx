import * as React from "react";
import classNames from "classnames";

interface IButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  text: string;
  block?: boolean;
  icon?: string;
}

export class Button extends React.Component<IButtonProps, any> {
  public render() {
    const { onClick, className, text, block, icon } = this.props;
    return (
      <button
        onClick={onClick}
        className={classNames(
          className,
          "bg-blue text-white font-bold py-2 px-4 rounded h-16",
          {
            "min-w-full": block
          }
        )}
      >
        {icon && <i className={classNames(icon, "mr-3")} />}
        {text}
      </button>
    );
  }
}
