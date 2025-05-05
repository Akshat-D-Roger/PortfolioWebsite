import foreverBuy from '../assets/forever-buy.png'
import bloggos from '../assets/bloggos.png'
import webweaver from '../assets/web-weaver.png'
import { Github } from 'lucide-react';
const projects = [
  {
    title: "WebWeaver (Builds web apps using Gen AI)",
    description: " It lets users input a natural language prompt and receive a fully functional web app scaffold with code and live preview using web containers to run the application in browser",
    image: webweaver,
    tags: ["NextJS", "TailwindCSS","Zustand", "Vercel AI SDK", "Gemini 2.5", "ShadCN"],
    links:["https://foreverbuy-akshat.vercel.app/", "https://github.com/Akshat-D-Roger/ReactProjects/tree/main/ForeverBuy"]
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with User Authentication, debouncing for search, pagination to display products, and advanced sorting and filtering",
    image: foreverBuy,
    tags: ["React", "TailwindCSS","Recoil", "Express", "PostgresSQL", "Prisma", "JWT"],
    links:["https://foreverbuy-akshat.vercel.app/", "https://github.com/Akshat-D-Roger/ReactProjects/tree/main/ForeverBuy"]
  },
  {
    title: "User blogging Application",
    description: "A user authenticated Web application that allows user to create, upload and publish blogs on the go and also to access their blogs as well other's published blogs",
    image: bloggos,
    tags: ["React", "TailwindCSS","Recoil", "TypeScript", "Hono", "PostgresSQL", "Prisma", "JWT"],
    links:["https://bloggos-akshat.vercel.app/", "https://github.com/Akshat-D-Roger/ReactProjects/tree/main/Bloggos"]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 section-gradient-2" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.links[0]} target='blank' className="gradient-card rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-[#99f6e4] text-sm text-black rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-[1rem] pt-[3rem]'>
                  <a href={project.links[1]} target='blank' className='hover:text-blue-600'>
                  <Github />
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}