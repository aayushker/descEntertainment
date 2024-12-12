import Image from "next/image";
import { Movie } from "@/types/movie";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

interface MovieDetailsProps {
  movie: Movie;
}

export default function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <Card className="mt-8 w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{movie.Title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image
              src={movie.Poster}
              alt={`${movie.Title} poster`}
              width={300}
              height={445}
              className="rounded-lg shadow-lg"
            />
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
                ({movie.imdbVotes} votes)
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
