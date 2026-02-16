import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiExpress,
  SiMysql,
  SiNetlify,
  SiNpm,
  SiNextdotjs,
  SiPostgresql,
  SiVercel,
  SiCloudflare,
  SiHostinger,
  SiTypescript, 
  SiTailwindcss, 
  SiPhp
} from "react-icons/si";

const skills = [
  // Programming Languages
  { name: "HTML", category: "Programming Languages", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", category: "Programming Languages", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", category: "Programming Languages", icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: "TypeScript", category: "Programming Languages", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Python", category: "Programming Languages", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "PHP", category: "Programming Languages", icon: <SiPhp className="text-[#777BB4]" /> },

  // Frameworks & Libraries
  { name: "React", category: "Frameworks & Libraries", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", category: "Frameworks & Libraries", icon: <SiNextdotjs className="text-gray-400" /> },
  { name: "Express.js", category: "Frameworks & Libraries", icon: <SiExpress className="text-orange-300" /> },
  { name: "Tailwind CSS", category: "Frameworks & Libraries", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node.js", category: "Frameworks & Libraries", icon: <FaNodeJs className="text-[#339933]" /> },

  // Hosting & Deployment
  { name: "Netlify", category: "Hosting & Cloud Deployment", icon: <SiNetlify className="text-[#00C7B7]" /> },
  { name: "Cloudflare", category: "Hosting & Cloud Deployment", icon: <SiCloudflare className="text-[#F38020]" /> },
  { name: "Vercel", category: "Hosting & Cloud Deployment", icon: <SiVercel className="text-gray-400" /> },
  { name: "Hostinger", category: "Hosting & Cloud Deployment", icon: <SiHostinger className="text-[#673DE6]" /> },



  // Databases
  { name: "MySQL", category: "Databases", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "PostgreSQL", category: "Databases", icon: <SiPostgresql className="text-[#4169E1]" /> },

  // Tools
  { name: "Git", category: "Tools", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", category: "Tools", icon: <FaGithub className="text-gray-400" /> },
  { name: "npm", category: "Tools", icon: <SiNpm className="text-[#CB3837]" /> },
];

const categories = [
  "All",
  "Tools",
  "Databases",
  "Programming Languages",
  "Frameworks & Libraries",
  "Hosting & Cloud Deployment",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={cn(
            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6",
            filteredSkills.length === 1 && "justify-center"
          )}
        >
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="flex flex-col sm:flex-row items-center gap-3 p-4 
                         rounded-xl bg-card/80 backdrop-blur-md border border-border 
                         shadow-md hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="font-semibold text-lg text-center sm:text-left">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
