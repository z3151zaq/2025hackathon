import React, { type FC, type ReactNode } from "react";

/**
 * Dashboard layout component.
 * @param {object} props
 * @param {React.ReactNode} props.children - Nested page content.
 * @returns {JSX.Element} The dashboard layout.
 */
const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout; 