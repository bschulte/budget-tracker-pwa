import * as React from "react";
import { PageContainer } from "../components/core/PageContainer";
import { Button } from "../components/core";
import { AddExpenseButton } from "../components/HomePage/AddExpenseButton";

export const HomePage = () => {
  return (
    <PageContainer className="animated fadeIn">
      <AddExpenseButton />
    </PageContainer>
  );
};
