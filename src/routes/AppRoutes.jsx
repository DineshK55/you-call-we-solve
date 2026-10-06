import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Works from "../pages/Works";
import WorkDetails from "../pages/WorkDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AddWork from "../pages/Admin/AddWork";
import ManageWorks from "../pages/Admin/ManageWorks";
import EditWork from "../pages/Admin/EditWork";

import ScrollToTop from "../components/ScrollToTop";

function AppRoutes() {
  return (
     <>
      <ScrollToTop />
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin Website */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-works" element={<ManageWorks />} />
        <Route path="/admin/add-work" element={<AddWork />} />
        <Route path="/admin/edit-work/:id"element={<EditWork />}/>
      </Route>
    </Routes>
    </>

    
  );
}

export default AppRoutes;