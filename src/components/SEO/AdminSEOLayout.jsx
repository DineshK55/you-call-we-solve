import { Outlet } from "react-router-dom";
import NoIndex from "./NoIndex";

function AdminSEOLayout() {
  return (
    <>
      <NoIndex />
      <Outlet />
    </>
  );
}

export default AdminSEOLayout;