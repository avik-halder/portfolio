import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";

export const LINES = ["Designer", "Full Stack Developer", "Programmer"];

// export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT = `I use a variety of technological tools and instruments to create my art. While I'm trying to decide on a specialization, I've worked with front-end technologies such as React, HTML, and CSS frameworks, as well as back-end technologies such as Node.js, FastAPI, and MySQL and have thoroughly enjoyed the experience. I cannot claim to be an expert in most of these areas, but I believe that once you know the what and why, the how is only a few well-executed Google searches away!`;

export const ABOUT_TEXT = `Striving to turn "if-else" into a new way of life; <br/><br/>

Currently I am pursuing my undergraduate degree in Internet of Things and Robotics Engineering(IRE) at Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh.<br/><br/>

The rapid pace of technological advancements never ceases to amaze me and fuels my passion for innovation. While my expertise may be limited, my commitment to grow and learn knows no bounds.

Outside of tech, I am a tea lover, a football lover and have spent my college days exploring theatre.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - Present",
    role: "Executive Member",
    company: "Bangladesh Association of Software and Information Services (BASIS)",
    description: `Bangladesh's premier trade body for the software and IT-enabled service industry. Organized study sessions and training opportunities.`,
    technologies: ["Communication", "Web Dev", "Soft. Dev","Networking"],
  },
  {
    year: "May 2023 - Present",
    role: "Executive Member",
    company: "BDU Steam Club",
    description: `One of the most successfull club of Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh. Coordinated and managed tech events, workshops and facilitated communication between club members and university administration.`,
    technologies: ["Project Management", "Time Management", "Leadership"],
  },
];

export const PROJECTS = [
  {
    title: "Khida Lagse",
    image: project6,
    description:
    "Khida Lagse is a restaurant management system built using React and FastAPI. It features a user panel for food ordering, an admin panel for managing food items and orders, and delivery tracking with OTP verification.",
      technologies: ["React", "BootStrap", "FastAPI", "SQLite", "JWT"],
    live: null,
    link: "https://github.com/avik-halder/Khida-Lagse.git",
  },
  {
    title: "CakriHUT",
    image: project1,
    description:
      "CakriHUT is a job portal website built using React and FastAPI. The platform supports multiple user roles, including super admin, admin, and normal users. Users can apply for jobs, search for job openings, and post job opportunities.",
    technologies: ["React", "BootStrap", "Node.js", "FastAPI"],
    live: null,
    link: "https://github.com/avik-halder/CakriHUT.git",
  },
  {
    title: "Love-Me-or-Not",
    image: project4,
    description: 
      "Love-Me-or-Not is a funny website, there is an unclickable button.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://avik-halder.github.io/Love-Me-or-Not/",
      link: "https://github.com/avik-halder/Love-Me-or-Not.git",
  },
  {
    title: "IoT-Based Weather Monitoring System",
    image: project2,
    description:
      "The IoT-Based Weather Monitoring System is designed to collect real-time weather data using various sensors. The system measures light intensity, temperature, humidity, atmospheric pressure, and rainfall, displaying the data locally on an LCD screen and remotely via the internet. This system is useful for applications in agriculture, urban planning, and disaster management.",
    technologies: ["C++", "ESP8266", "DHT11", "BMP180", "LDR", "Rain Sensor(FC-37)", "BlynkIoT"],
    live: null,
    link: "https://github.com/avik-halder/IoT-Based-Weather-Monitoring-Station.git",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "Framer Motion"],
    live: "https://avik-halder.vercel.app/",
    link: "https://github.com/avik-halder/portfolio.git",
  },
  {
    title: "Campus Network System",
    image: project5,
    description:
      "Campus Network System is a comprehensive network solution designed using Cisco Packet Tracer to enhance communication and resource sharing across departments, labs, and facilities at Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh.",
    technologies: ["Cisco Packet Tracer"],
    live: null,
    link: "https://github.com/avik-halder/Campus-Network-System.git",
  },
];

export const CONTACT = {
  address: "Faridpur Sadar, Faridpur, Bangladesh ",
  phoneNo: "+880-1798709761 ",
  email: "official.avik.h@gmail.com",
};
