import React from 'react';
import { format } from 'date-fns';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { blogs } from '@/lib/blogdata';

export default function Blogs() {
  return (
    <div className="max-w-4xl mx-auto font-nunito px-8 mt-4">
      <h1 className='text-3xl '>Blogs</h1>


      <div className="space-y-10 mt-8">
        {blogs.map(blog => (
          <article key={blog.id} className="border-b border-gray-200 pb-8 last:border-b-0">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="flex items-center">
                <IconCalendar size={16} className="mr-1" />
                {format(blog.publishedAt, 'MMMM d, yyyy')}
              </span>
              <span className="mx-2">•</span>
              <span>{blog.readTime} min read</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-white">
              <Link href={`/blogs/${blog.id}`} className="hover:text-green-600 transition">
                {blog.title}
              </Link>
            </h3>
            
            <p className="text-gray-500 text-base font-semibold mb-4">{blog.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-green-500 text-black text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link href={`/blogs/${blog.id}`} className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition">
              Read more <IconArrowRight size={16} className="ml-1" />
            </Link>
          </article>
        ))}
      </div>


      
    
    </div>
  );
}