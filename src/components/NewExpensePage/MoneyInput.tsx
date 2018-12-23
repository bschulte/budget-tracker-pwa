import * as React from "react";
import { Input } from "../core";

export interface IMoneyInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export default class MoneyInput extends React.Component<IMoneyInputProps, any> {
  maskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    console.log("e.target.value:", e.target.value);
    const filteredStr = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^[0]*/g, "");

    console.log("Filtered string:", filteredStr);
    onChange(filteredStr);
  };

  public render() {
    const value = this.props.value || "0";

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });
    console.log("Formatting value:", value);
    const maskedValue = formatter.format(parseInt(value, 10));
    return <Input value={maskedValue} onChange={this.maskInput} />;
  }
}
