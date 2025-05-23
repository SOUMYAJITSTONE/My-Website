'use client';
import Hero from "@/components/Hero";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/ui/Clients";
import Approach from "@/components/ui/Approach";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
    items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
