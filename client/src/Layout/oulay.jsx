import Navbar from "./Sidebars/CourseNavbar";
import Sidebar from "./Sidebars/CourseSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-[250px] w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-[250px] flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-[250px] md:pt-0 overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
