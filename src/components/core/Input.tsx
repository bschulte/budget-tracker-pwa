import * as React from "react";

export interface IInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export class Input extends React.Component<IInputProps, any> {
  public render() {
    const { onChange, value } = this.props;
    return (
      <input
        type="text"
        onChange={onChange}
        value={value}
        className="border border-gray h-16 text-2xl"
      />
    );
  }
}
