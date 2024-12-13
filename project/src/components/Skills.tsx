import {Layers, Code2, Palette, Box, Store,Server, Database, Pyramid, Globe,Cloud, GitBranch, Container,FileCode, Trello, Send
} from 'lucide-react';

const skills = {
  "Frontend": [
    { name: "React", icon: <Layers size={24} /> },
    { name: "TypeScript", icon: <Code2 size={24} /> },
    { name: "Next.js", icon: <Box size={24} /> },
    { name: "Tailwind CSS", icon: <Palette size={24} /> },
    { name: "Recoil", icon: <Store size={24} /> }
  ],
  "Backend": [
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "Express", icon: <Globe size={24} /> },
    { name: "Prisma", icon: <Pyramid size={24}/>},
    { name: "PostgreSQL", icon: <Database size={24} /> }
  ],
  "DevOps": [
    { name: "Docker", icon: <Container size={24} /> },
    { name: "AWS", icon: <Cloud size={24} /> },
  ],
  "Tools": [
    { name: "Git", icon: <GitBranch size={24} /> },
    { name: "VS Code", icon: <FileCode size={24} /> },
    { name: "Jira", icon: <Trello size={24} /> },
    { name: "Postman", icon: <Send size={24} /> }
  ]
};

export const Skills = () => {
  return (
    <section className="py-20 section-gradient-2" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Technologies & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="gradient-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-4">
                {items.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 group">
                    <div className="p-3 tag-gradient rounded-lg text-white transform transition-all duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}