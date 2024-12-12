"use client";
import { useState } from "react";
import MovieDetails from "./MovieDetails";
import { Movie } from "@/types/movie";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function MovieSearch() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/search?title=${encodeURIComponent(search)}`
      );
      if (!res.ok) throw new Error("Failed to fetch movie");
      const data = await res.json();
      if (data.Response === "False") throw new Error(data.Error);
      setMovie(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-4 rounded-xl shadow-md">
        <Input
          type="text"
          placeholder="Search Bollywood movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          className="w-full border-none focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        />
        <Button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Searching...
            </>
          ) : (
            "Search"
          )}
        </Button>
      </div>
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
}
