import { Button } from "@/components/ui/button";
import React from "react";
import Authentication from "./Authentication";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-24 md:px-20 lg:px-36 xl:px-48">
      <h1 className="text-5xl font-bold mt-24">AI Youtube Shorts Generator </h1>
      <p className="text-2xl text-center mt-4 text-gray-500">
        🤖 Al generates scripts, images, and voiceovers in seconds. 🚀 Create,
        edit, and publish engaging shorts with ease!
      </p>
      <div className="flex gap-4 mt-8">
        <Button size="lg" variant="secondary">
          Explore
        </Button>
        <Authentication>
          <Button size="lg">Get Started</Button>
        </Authentication>
      </div>
    </div>
  );
}

export default Hero;
