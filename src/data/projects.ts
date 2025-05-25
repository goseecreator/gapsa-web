interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  snippets?: {
    id: string;
    title: string;
    videoUrl: string;
    thumbnail: string;
    relatedProjectSlug: string;
    description?: string; // Made description optional
  }[];
}

export const projects: Project[] = [
  {
    slug: "peace-tournament-2025",
    title: "Peace Tournament 2025",
    description: "A youth-led soccer initiative to bridge communities through sport and dialogue.",
    image: "https://via.placeholder.com/400x200?text=Peace+Tournament",
    category: "recent",
    snippets: [
      {
        id: "peace-tournament-1",
        title: "Opening Ceremony",
        videoUrl: "https://via.placeholder.com/800x400?text=Video+1",
        thumbnail: "https://via.placeholder.com/200x100?text=Thumbnail+1",
        relatedProjectSlug: "peace-tournament-2025",
        description: "This is a sample description for Snippet 1",
      },
    ],
  },
  {
    slug: "literacy-summit",
    title: "Literacy Summit",
    description: "Workshops and performances to promote storytelling and creative expression.",
    image: "https://via.placeholder.com/400x200?text=Literacy+Summit",
    category: "recent",
    snippets: [
      {
        id: "literacy-summit-1",
        title: "Keynote Speaker",
        videoUrl: "https://via.placeholder.com/800x400?text=Video+2",
        thumbnail: "https://via.placeholder.com/200x100?text=Thumbnail+2",
        relatedProjectSlug: "literacy-summit",
      },
    ],
  },
  {
    slug: "healing-garden",
    title: "Healing Garden",
    description: "A sanctuary project integrating therapy, art, and nature for children and families.",
    image: "https://via.placeholder.com/400x200?text=Healing+Garden",
    category: "recent",
    snippets: [
      {
        id: "healing-garden-1",
        title: "Therapy Session",
        videoUrl: "https://via.placeholder.com/800x400?text=Video+3",
        thumbnail: "https://via.placeholder.com/200x100?text=Thumbnail+3",
        relatedProjectSlug: "healing-garden",
      },
    ],
  },
  {
    slug: "peace-village",
    title: "Peace Village",
    description: "Creating restorative spaces that celebrate culture and resilience in local communities.",
    image: "https://via.placeholder.com/400x200?text=Peace+Village",
    category: "recent",
    snippets: [
      {
        id: "peace-village-1",
        title: "Cultural Celebration",
        videoUrl: "https://via.placeholder.com/800x400?text=Video+4",
        thumbnail: "https://via.placeholder.com/200x100?text=Thumbnail+4",
        relatedProjectSlug: "peace-village",
      },
    ],
  },
  {
    slug: "youth-summit-2023",
    title: "Youth Summit 2023",
    description: "A gathering of young voices across borders focused on peace and development.",
    image: "https://via.placeholder.com/400x200?text=Youth+Summit",
    category: "past",
  },
  {
    slug: "solar-village",
    title: "Solar Village Initiative",
    description: "Future-facing green energy project bringing sustainable light to rural regions.",
    image: "https://via.placeholder.com/400x200?text=Solar+Village",
    category: "future",
    snippets: [
      {
        id: "solar-village-1",
        title: "Solar Panel Installation",
        videoUrl: "https://via.placeholder.com/800x400?text=Video+5",
        thumbnail: "https://via.placeholder.com/200x100?text=Thumbnail+5",
        relatedProjectSlug: "solar-village",
      },
    ],
  },
];
