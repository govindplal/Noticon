"use client";

import { useConvexAuth } from "convex/react";
import Sidebar from "../_components/sidebar";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const {isAuthenticated, isLoading} = useConvexAuth();

  if(isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner/>
      </div>
    );
  }

  if(!isAuthenticated) {
    return redirect('/');
  }
  
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
