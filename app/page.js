import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
export default function Home() {
  return (
    <div className="md:px-16 lg:px-14 xl:px-36">
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero/>
    </div>
  );
}
