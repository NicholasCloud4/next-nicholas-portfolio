import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main
            className="relative bg-gray-100 flex justify-center items-center flex-col overflow-hidden 
    mx-auto sm:px-10 px-5"
        >
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <RecentProjects />
                <Footer />
            </div>
        </main>
    );
}
