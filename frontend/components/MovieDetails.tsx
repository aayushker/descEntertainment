import Image from "next/image";
import { Movie } from "@/types/movie";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import { useState } from "react";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLike = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('http://localhost:8000/api/like/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });

      if (!res.ok) throw new Error('Failed to like movie');
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-8 w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{movie.Title}</CardTitle>
        <Button
          onClick={handleLike}
          className="mt-4 bg-blue-500 text-white"
          disabled={loading}
          aria-label={`Like ${movie.Title}`}
        >
          {loading ? "Liking..." : "Like"}
        </Button>
      </CardHeader>

      {error && (
        <div className="mt-4 p-4 text-red-500 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <CardContent>
        <section className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            {movie.Poster && movie.Poster !== "N/A" ? (
              <Image
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                width={300}
                height={445}
                className="rounded-lg shadow-lg"
              />
            ) : (
              <div className="bg-gray-200 w-full h-72 rounded-lg flex justify-center items-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>

          <div className="mt-4 md:mt-0 md:ml-6 md:w-2/3">
            <p className="text-lg">
              <span className="font-semibold">Year:</span> {movie.Year}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Actors:</span> {movie.Actors}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Plot:</span> {movie.Plot}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.Genre.split(", ").map((genre) => (
                <Badge key={genre} variant="secondary">
                  {genre}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex items-center">
              <StarIcon className="mr-1 h-5 w-5 text-yellow-400" />
              <span className="font-semibold">{movie.imdbRating}</span>
              <span className="ml-1 text-sm text-gray-500">
                ({movie.imdbVotes} {movie.imdbID} votes)

              </span>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
