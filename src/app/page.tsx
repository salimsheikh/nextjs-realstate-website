import Features from "@/components/Features";
import Hero from "@/components/Hero";
import OurStroy from "@/components/OurStroy";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurStroy />
      <Features />
    </div>
  );
}
