import * as React from "react";
import classNames from "classnames";

export const PageContainer = ({
  children,
  className
}: {
  children: any;
  className?: string;
}) => {
  return <div className={classNames(className, "p-1")}>{children}</div>;
};
