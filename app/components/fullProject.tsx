import ProjectCard from '@/app/components/projectCard';

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  const projectData = [

    {
      title: 'ProNext',
      description: 'ProNext is a social app for developers, where developers can showcase their projects and collaborate with other developers.',
      image: '/Screenshot 2024-11-02 112908.png',
      techStack: ['React', 'Next.js', 'Tailwind CSS', 'Cloudinary', 'PostgreSQL', 'Prisma', 'Typescript'],
      liveUrl: 'https://pro-next-one.vercel.app/',
      repoUrl: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      title: 'WanderWise',
      description: 'Explore extraordinary destinations, create unforgettable memories, and embark on journeys that will last a lifetime.',
      image: '/Screenshot 2025-01-28 201712.png',
      techStack: ['Javascript', 'React', 'NodeJs', 'ExpressJs', 'Tailwind CSS', 'MongoDB'],
      liveUrl: 'https://wanderwise-tl1p.vercel.app/home',
      repoUrl: 'https://github.com/Anilcodes01/Wanderwise'
    },
    {
      title: 'Moments',
      description: 'Moments is a place where users can save their memories and moments spent with their friends, family and loved ones like they write it in diary. User can save a moment in image, video and write about the image also.',
      image: '/Screenshot 2024-11-16 193125.png',
      techStack: ['React Js','Next.js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Node Js', 'Cloudinary', 'Prisma'],
      liveUrl: 'https://moments-iota.vercel.app/',
      repoUrl: 'https://github.com/Anilcodes01/Moments'
    },
    {
      title: 'NextBuy',
      description: 'NextBuy is an e-commerce web app, where you can shop variety of products from laptops to books, everything.',
      image: '/Screenshot 2024-09-09 142437.png',
      techStack: ['React Js', 'Node.js', 'Next Js', 'Typescript', 'PostgreSQL', 'TailwindCSS', 'Prisma'],
      liveUrl: 'https://next-buy-u6zt.vercel.app/',
      repoUrl: 'https://github.com/Anilcodes01/NextBuy'
    },
    {
      title: 'Dorse.Inc',
      description: 'Dorse.Inc is a web app where people can write articles with a built-in text editor.',
      image: '/Screenshot 2024-07-30 215421.png',
      techStack: ['React Js', 'Node Js', 'Express Js', 'TailwindCSS', 'Hono', 'Cloudflare', 'TinyMce', 'Typescript', 'Zod', 'Mongo DB'],
      liveUrl: 'https://dorse-inc.vercel.app/',
      repoUrl: 'https://github.com/Anilcodes01/Dorse-Inc'
    },
   
    
    {
      title: 'NoteEase',
      description: 'NoteEase is a web app where you can create, update, delete and read notes smoothly.',
      image: '/Screenshot 2024-08-04 172924.png',
      techStack: ['React Js', 'Typescript', 'Mongo DB', 'TailwindCSS', 'Express Js', 'Node Js', 'Zod'],
      liveUrl: 'https://project-four.com',
      repoUrl: 'https://github.com/yourusername/project-four'
    },

    {
      title: 'School Management API',
      description: 'This is a backend of a school management application to add school and get the list of school by providing longitudes and latitudes.',
      image: '/Screenshot 2024-11-27 163918.png',
      techStack: [ 'Node Js', 'Express Js',  'Javascript', 'Railway', 'MySQL'],
      liveUrl: 'https://school-management-q6oe.onrender.com/api/listSchools?latitude=54.4231&longitude=-70.8877',
      repoUrl: 'https://github.com/Anilcodes01/School_management'
    },
   
  ];

  return (
    <section className={`py-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-4xl">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} isDarkMode={isDarkMode} />
        ))}
      </div>
    </section>
  );
}
