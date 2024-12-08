import React from "react";
import { FaReact, FaNodeJs, FaCss3, FaHtml5, FaDatabase, FaJs, FaFigma } from "react-icons/fa";
import { FaCode, FaGithub } from "react-icons/fa6";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3 className="text-5xl text-blue-400" /> },
        { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" /> },
        { name: "Express.js", icon: <FaJs className="text-5xl text-yellow-400" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-5xl text-green-500" /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-5xl text-gray-400" /> },
        { name: "VSCode", icon: <FaCode className="text-5xl text-blue-300" /> },
        { name: "Figma", icon: <FaFigma className="text-5xl text-purple-400" /> },
      ],
    },
  ];

  return (
    <section
      className="py-16 px-8 text-white bg-gradient-to-b from-gray-900 via-black to-gray-900"
      id="skills"
    >
      <h2 className="text-4xl font-bold font-heading text-center mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-lg shadow-md transition transform hover:-translate-y-1 border border-white"
          >
            <h3 className="text-2xl font-heading font-semibold text-center mb-6">
              {group.category}
            </h3>
            <ul className="space-y-6">
              {group.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-md"
                >
                  {skill.icon}
                  <span className="text-xl">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
