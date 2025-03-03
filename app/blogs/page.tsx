import React from 'react';
import { format } from 'date-fns';
import { IconCalendar, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { blogs } from '@/lib/blogdata';

export default function Blogs() {
  return (
    <div className="max-w-4xl mx-auto font-poppins px-8 py-12">


      <div className="space-y-10">
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
            
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              <Link href={`/blogs/${blog.id}`} className="hover:text-orange-600 transition">
                {blog.title}
              </Link>
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map(tag => (
                <span key={tag} className="px-2.5 py-0.5 bg-orange-300 text-gray-700 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <Link href={`/blogs/${blog.id}`} className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition">
              Read more <IconArrowRight size={16} className="ml-1" />
            </Link>
          </article>
        ))}
      </div>
      
    
    </div>
  );
}