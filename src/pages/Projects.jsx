import React from "react";
import projectImage from "../assets/AwesomeRecipes2.svg"; 
import bookStoreImg from '../assets/BookStore.svg'
import FashionHubImg from '../assets/FashionHub.svg'
import EcartImg from '../assets/E-Cart.svg'
import ProjectFairImg from '../assets/ProjectFair.svg'



const Projects = () => {
  const projectData = [
    {
      title: "Awesome Recipes",
      description: "A MERN stack app for finding Awesome recipes.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: projectImage,
      liveDemo: "https://awesome-recipes-akshay.netlify.app",
      github: "https://github.com/Aksheyyy/Awesome-recipes-front-End",
    },
    {
      title: "Book Store",
      description: "A Book Store app using React and Tailwind CSS.",
      technologies: ["React","Redux","Firebase","Node","Express","MongoDB"],
      image: bookStoreImg,
      liveDemo: "https://resilient-nougat-f41d58.netlify.app",
      github: "https://github.com/Aksheyyy/Book-store-frontend",
    },
    {
      title: "Style Bytes",
      description: "Static website for an interior design Company",
      technologies: ["React","Tailwind CSS","AOS"],
      image: FashionHubImg,
      liveDemo: "https://stylebytes-akshay.netlify.app",
      github: "https://github.com/Aksheyyy/Style-Bytes",
    },
    {
      title: "E-Cart",
      description: "Search,view,add remove items using Redux.",
      technologies: ["React", "Redux", "DummyJsonAPI"],
      image: EcartImg,
      liveDemo: "https://e-cart-akshay.netlify.app",
      github: "https://github.com/Aksheyyy/E-cart",
    },
    {
      title: "Project Fair",
      description: "A MERN stack app that showcases projects done by users",
      technologies: ["React","Tailwind CSS","Node","Express","MongoDB"],
      image: ProjectFairImg,
      liveDemo: "https://project-fair-akshay.netlify.app",
      github: "https://github.com/Aksheyyy/Project-Fair-Client",
    },
  ];

  return (

<section
  className="py-16 px-8 bg-black text-white min-h-screen relative"
  style={{
    backgroundImage:
      "url(https://images.pexels.com/photos/9694693/pexels-photo-9694693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

  <h2
    className="text-4xl font-bold font-heading text-center mb-12 relative z-10"
    data-aos="fade-up"
  >
    Projects
  </h2>

  {/* Bento Grid Container */}
  <div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10 cursor-pointer"
  >
    {projectData.map((project, index) => (
      <div
        key={index}
        className={`relative p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 border border-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ${
          index % 5 === 0
            ? "sm:col-span-2 sm:row-span-2 col-span-1 row-span-1"
            : "col-span-1 row-span-1"
        }`}
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "250px",
        }}
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="absolute inset-0 flex flex-col justify-end bg-black bg-opacity-90 p-4 opacity-0 hover:opacity-100 transition duration-300">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm mb-4">{project.description}</p>
          <div className="text-sm mb-4">
            <strong>Technologies:</strong> {project.technologies.join(", ")}
          </div>
          <div className="flex space-x-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


  );
};

export default Projects;
