import { OrbitIcons } from "../components/OrbitIcons";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
   "mysql",
  "css3",
   "javascript",
  "tailwindcss",
  "github",
  "bootstrap",
  "responsive-design",
  "figma",
  "seo",
  "react",
   "git",
  "typescript",
  "accessibility",
  "tailwindcss",
  "bootstrap",
  "figma",
  "git",
  "github",
  "javascript",
  "laravel",
  "php",
  "mysql",
  "postman",
  "vuejs"
];


export function FrameWork() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <OrbitIcons images={images} />
    </div>
  );
}
