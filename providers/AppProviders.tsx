"use client";
import { useEffect, useState } from "react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  
 
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) setTheme(savedTheme);
    } catch (error) {
      console.error("Error reading localStorage", error);
    }
  }, []);

  return (
    <div>
    
      {children}
    </div>
  );
}