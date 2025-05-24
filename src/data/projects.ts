
export interface Snippet {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail?: string;
  relatedProjectSlug?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: "recent" | "past" | "future";
  snippets?: Snippet[];
}

export const projects: Project[] = [
  {
    slug: "peace-tournament-2025",
    title: "Peace Tournament 2025",
    description: "A youth-led soccer initiative to bridge communities through sport and dialogue.",
    image: "/images/peace-tournament.jpg",
    category: "recent",
    snippets: [
      {
        id: "snippet-1",
        title: "Opening Ceremony Highlights",
        videoUrl: "https://youtube.com/embed/abc123",
        thumbnail: "/images/snippet-thumb1.jpg",
        relatedProjectSlug: "peace-tournament-2025"
      }
    ]
  },
  {
    slug: "creative-literacy-summit",
    title: "Creative Literacy Summit",
    description: "Workshops and performances to promote storytelling and education.",
    image: "/images/literacy-summit.jpg",
    category: "past"
  },
  {
    slug: "solar-village-initiative",
    title: "Solar Village Initiative",
    description: "An upcoming green energy project bringing sustainable light to rural communities.",
    image: "/images/solar-village.jpg",
    category: "future"
  }
];
