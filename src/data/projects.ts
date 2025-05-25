// src/data/projects.ts

export type Snippet = {
  id: string;
  title: string;
  videoUrl: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: "recent" | "past" | "future";
  snippets?: Snippet[]; // Optional snippets
};

export const projects: Project[] = [
  {
    slug: "healing-circles",
    title: "Healing Circles",
    description: "Community healing sessions with music, dialogue, and support.",
    image: "/images/healing.jpg",
    category: "recent",
    snippets: [
      {
        id: "snippet-healing-1",
        title: "Circle Voices",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    slug: "future-builders",
    title: "Future Builders",
    description: "Workshops and creative labs for young changemakers.",
    image: "/images/future.jpg",
    category: "recent",
    snippets: [
      {
        id: "snippet-future-1",
        title: "Youth Lab Recap",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  },
  {
    slug: "peace-portraits",
    title: "Peace Portraits",
    description: "Capturing local peacebuilders through interviews and art.",
    image: "/images/peace.jpg",
    category: "recent",
  },
  {
    slug: "story-gatherers",
    title: "Story Gatherers",
    description: "Oral history initiative to record African peace practices.",
    image: "/images/story.jpg",
    category: "recent",
  },
];
