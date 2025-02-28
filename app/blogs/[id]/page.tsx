"use client";

import React from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { IconCalendar, IconClock, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { blogs } from "../../../lib/blogdata";
import ReactMarkdown from "react-markdown";

export default function BlogPost() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading post...</h1>
        <p>If the post doesn't appear, it may not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
        >
          <IconArrowLeft size={16} className="mr-1" /> Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blogs"
        className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900"
      >
        <IconArrowLeft size={16} className="mr-1" /> All posts
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">{blog.title}</h1>

        <div className="flex flex-wrap items-center text-gray-500 mb-6 gap-y-2">
          <span className="flex items-center">
            <IconCalendar size={18} className="mr-1" />
            {format(blog.publishedAt, "MMMM d, yyyy")}
          </span>
          <span className="mx-3">•</span>
          <span className="flex items-center">
            <IconClock size={18} className="mr-1" />
            {blog.readTime} min read
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {blog.content && <ReactMarkdown>{blog.content}</ReactMarkdown>}
      </div>
    </div>
  );
}
