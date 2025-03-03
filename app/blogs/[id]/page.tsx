"use client";

import React from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { IconCalendar, IconClock, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { blogs } from "../../../lib/blogdata";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import Image from "next/image";

export default function BlogPost() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Loading post...</h1>
        <p>If the blog doesn&apos;t appear, it may not exist.</p>
        <Link
          href="/blogs"
          className="inline-flex items-center mt-4 text-orange-500 hover:text-orange-700"
        >
          <IconArrowLeft size={16} className="mr-1" /> Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blogs"
        className="inline-flex items-center font-poppins mb-8 text-orange-500 hover:text-orange-600"
      >
        <IconArrowLeft size={16} className="mr-1 font-poppins" /> All Posts
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-6 font-poppins text-gray-900">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center font-poppins text-gray-500 mb-6 gap-y-2">
          <span className="flex  items-center">
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
              className="px-3 py-1 font-poppins bg-orange-300 text-gray-700 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div>
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            width={1000}
            height={800}
            alt="websockets image"
            className=" rounded-lg"
          />
        )}
      </div>

      <div className="prose prose-lg  max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({
              inline,
              className,
              children,
              ...props
            }: {
              inline?: boolean;
              className?: string;
              children?: React.ReactNode;
            }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md my-4"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="bg-gray-100 px-1 py-0.5 rounded text-red-500 font-medium"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            h2: ({ ...props }) => (
              <h2
                className="text-2xl font-poppins  font-bold mt-8 mb-4"
                {...props}
              />
            ),
            h3: ({ ...props }) => (
              <h3
                className="text-xl font-poppins font-bold mt-6 mb-3"
                {...props}
              />
            ),
            p: ({ ...props }) => (
              <p className="my-4 font-poppins leading-relaxed" {...props} />
            ),
            ul: ({ ...props }) => (
              <ul className="list-disc pl-6 my-4 font-poppins" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="mb-1 font-poppins" {...props} />
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
