"use client";
import MovieSearch from "@/components/MovieSearch";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <main className="flex-grow h-screen w-full relative flex items-center justify-center pt-16 bg-animated-gradient">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300/10 to-gray-500/10 dark:via-gray-900/10 dark:to-black/10 blur-xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-white text-black mb-8">
          Explore the Entertainment world🎬
        </h1>
        <p className="text-lg md:text-xl dark:text-gray-400 text-gray-600 mb-6">
          Discover, search, and save your favorite movies and shows.
        </p>
        <MovieSearch />
      </div>
    </main>
  );
}
