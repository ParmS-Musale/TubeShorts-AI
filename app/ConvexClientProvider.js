"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";
import Provider from "./Provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
function ConvexClientProvider({ children }) {

  return (
    <div>
      <ConvexProvider client={convex}>
        <Provider>{children}</Provider>
      </ConvexProvider>
    </div>
  );
}

export default ConvexClientProvider;
