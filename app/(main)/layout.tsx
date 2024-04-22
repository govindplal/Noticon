"use client";

import Sidebar from "../_components/sidebar";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-screen flex flex-row dark:bg-[#1F1F1F]">
      <Sidebar/>
      <main className="flex flex-1 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;
