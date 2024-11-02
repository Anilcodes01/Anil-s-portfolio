import ProjectCard from '@/app/components/projectCard';

export default function Projects() {
  const projectData = [
    {
      title: 'ProNext',
      description: 'ProNext is a social app for developers, where developers can showcase thier projects and collaborate with other developers.',
      image: '/Screenshot 2024-11-02 112908.png',
      techStack: ['React', 'Next.js', 'Tailwind CSS','Cloudinary', 'PostgreSql', 'Prisma', 'Typescript'],
      liveUrl: 'https://pro-next-one.vercel.app/',
      repoUrl: 'https://github.com/Anilcodes01/ProNext'
    },
    {
      title: 'NextBuy',
      description: 'NextBuy is an e-commerce web app, where you can shop variety of products from laptops to books, everything.',
      image: '/Screenshot 2024-09-09 142437.png',
      techStack: ['React Js', 'Node.js', 'Next Js', 'Typescript', 'PostgreSql', 'TailwindCSS', 'Prisma'],
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
      techStack: [ 'React Js', 'Typescript', 'Mongo DB', 'TailwindCSS', 'Express Js', 'Node Js', 'Zod'],
      liveUrl: 'https://project-four.com',
      repoUrl: 'https://github.com/yourusername/project-four'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-4xl">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
