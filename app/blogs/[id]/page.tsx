"use client";

import React from "react";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { IconCalendar, IconClock, IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

import { blogs } from "../../../lib/blogdata";
import NavigationButtons from "../../components/NavigationButtons";

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id;

  const blogId = typeof id === "string" ? parseInt(id, 10) : undefined;
  const blog =
    blogId !== undefined && !isNaN(blogId)
      ? blogs.find((b) => b.id === blogId)
      : undefined;

  if (!blog) {
    return (
      <div className="flex flex-col items-center  justify-center h-screen text-white font-nunito">
        <h1 className="text-2xl font-bold mb-4">
          {id ? "Blog post not found." : "Loading post..."}
        </h1>
        <p className="mb-4">
          {id
            ? "The blog post you are looking for does not exist or has been moved."
            : "Please wait..."}
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center mt-4 text-orange-500 hover:text-orange-600"
        >
          <IconArrowLeft size={16} className="mr-1" /> Back to all blogs
        </Link>
        <div className="mt-20">
          <NavigationButtons />
        </div>
      </div>
    );
  }

  return (
    <div className="text-white font-nunito pb-20 h-screen flex flex-col">
      <div className="p-4">
        <Link
          href="/blogs"
          className="inline-flex items-center  text-green-500 hover:text-green-600"
        >
          <IconArrowLeft size={16} className="mr-1 " /> All Posts
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="max-w-4xl mx-auto px-4 pb-12 pt-4">
          <header className="mb-10">
            <h1 className="text-4xl font-bold mb-6  text-gray-100">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center  text-gray-400 mb-6 gap-y-2">
              <span className="flex items-center">
                <IconCalendar size={18} className="mr-1" />
                {format(new Date(blog.publishedAt), "MMMM d, yyyy")}
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
                  className="px-3 py-1  bg-green-500 text-black text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {blog.imageUrl && (
            <div className="mb-8">
              <Image
                src={blog.imageUrl}
                width={1000}
                height={600}
                alt={blog.title || "Blog post image"}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          )}

          <article className="prose prose-lg max-w-none prose-invert font-nunito">
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
// @ts-ignore
                  [key: string]: any
                }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md my-4 text-sm"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className={`px-1 py-0.5 rounded font-medium ${
                        inline ? "bg-gray-700 text-gray-300" : "text-gray-300"
                      }`}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },

                h2: ({ ...props }) => (
                  <h2
                    className="text-2xl font-poppins font-bold mt-8 mb-4 text-gray-100"
                    {...props}
                  />
                ),
                h3: ({ ...props }) => (
                  <h3
                    className="text-xl font-poppins font-bold mt-6 mb-3 text-gray-200"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p className="my-4 leading-relaxed text-gray-400 font-nunito" {...props} />
                ),
                ul: ({ ...props }) => (
                  <ul className="list-disc pl-6 my-4 font-nunito" {...props} />
                ),
                li: ({ ...props }) => (
                  <li className="mb-1 font-nunito text-gray-200" {...props} />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>

    </div>
  );
}
