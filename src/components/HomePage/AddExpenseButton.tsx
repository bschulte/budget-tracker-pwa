import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../core/";

export interface IAddExpenseButtonProps {}

export class AddExpenseButton extends React.Component<
  IAddExpenseButtonProps,
  any
> {
  public render() {
    return (
      <Link to="/new-expense">
        <Button
          block
          icon="fas fa-plus"
          className="absolute pin-b pin-l"
          text="Add Expense"
        />
      </Link>
    );
  }
}
