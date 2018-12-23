import * as React from "react";
import { PageContainer } from "../components/core/PageContainer";
import MoneyInput from "../components/NewExpensePage/MoneyInput";

export interface INewExpensePageProps {}

export class NewExpensePage extends React.Component<INewExpensePageProps, any> {
  state = {
    moneyInput: ""
  };

  handleMoneyChange = (newValue: string) => {
    this.setState({ moneyInput: newValue });
  };

  public render() {
    const { moneyInput } = this.state;
    return (
      <PageContainer className="animated zoomIn">
        <MoneyInput value={moneyInput} onChange={this.handleMoneyChange} />
      </PageContainer>
    );
  }
}
