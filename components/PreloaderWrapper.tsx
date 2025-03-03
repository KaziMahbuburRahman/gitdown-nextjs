"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // or any other loading duration you prefer
  }, []);

  return loading ? <Preloader /> : <>{children}</>;
}
