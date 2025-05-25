// Update the path or create the missing file
import PeaceTournamentDetail from "../components/projectDetails/PeaceTournamentDetail.tsx";

// If the file does not exist, create it at the specified path or update the import path to the correct location.
import type { ReactElement } from "react";


export interface Snippet {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail?: string;
  relatedProjectSlug?: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string | ReactElement;
  image: string;
  category: "recent" | "past" | "future";
  images?: string[];
  snippets?: Snippet[];
}



export const projects: Project[] = [
  {
    slug: "peace-tournament-2025",
    title: "Peace Tournament 2025",
    shortDescription: "A youth-led soccer initiative to bridge communities through sport and dialogue.",
    fullDescription: "peace-tournament-2025", // or null
    image: "https://via.placeholder.com/400x200?text=Peace+Tournament",
    category: "recent",
    images: [
      "public/images/peaceTour2025/ football8.jpeg",
      "https://via.placeholder.com/800x400?text=Tournament+Photo+2",
      "https://via.placeholder.com/800x400?text=Tournament+Photo+3"
    ],
  }
];
