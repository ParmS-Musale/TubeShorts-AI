"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Authentication from "./Authentication";
import { useAuthContext } from "../Provider";
import Link from "next/link";

function Header() {
  const { user } = useAuthContext();

  return (
    <div className="p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">Tube Shorts AI</h2>
      </div>

      {/* Auth / User Info */}
      <div className="flex items-center gap-4">
        {!user ? (
          <Authentication>
            <Button>Get Started</Button>
          </Authentication>
        ) : (
          <div className="flex items-center gap-3">
            <Link href={'/dashboard'}><Button>Dashboard</Button></Link>
            <Image
              src={user.photoURL}
              alt="UserProfile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
