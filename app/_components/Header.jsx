import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Authentication from "./Authentication";

function Header() {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">Tube Shorts AI</h2>
      </div>
      <div>
        <Authentication>
          <Button>Get Started</Button>
        </Authentication>
      </div>
    </div>
  );
}

export default Header;
