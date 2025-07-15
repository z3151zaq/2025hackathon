import React, { type FC } from "react";
import { useParams } from "next/navigation";

/**
 * User detail page.
 * @returns {JSX.Element} The user detail.
 */
const UserDetail: FC = () => {
  const params = useParams();
  return <div>User ID: {params.id}</div>;
};

export default UserDetail; 