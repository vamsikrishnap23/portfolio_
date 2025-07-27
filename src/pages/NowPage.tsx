import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { PageLayout } from "../components/layout/PageLayout";

export function NowPage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-start justify-start w-full min-h-screen px-8 sm:px-16 md:px-24 py-16">
        <div className="max-w-3xl text-left w-full">
          <Link
            to="/"
            className="group flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 mb-12"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="italic">/home</span>
          </Link>

          <h1
            className="text-4xl font-semibold text-gray-900 dark:text-gray-100 drop-shadow-sm"
            style={{ fontFamily: "'General Sans', sans-serif" }}
          >
            /now
          </h1>
          <p
            className="text-base text-gray-800 dark:text-gray-400 mb-4 lowercase"
            style={{ fontFamily: "'Inter', sans-serif'" }}
          >
            A snapshot of what I’m currently focused on.
          </p>

          <div
            className="mt-8 space-y-6 text-lg text-gray-800 dark:text-gray-300 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <p>
              I am currently building a modular{" "}
              <strong>Vedic Astrology API</strong> using FastAPI. The system
              supports divisional charts, planetary strengths, Ashtakavarga,
              Dasha timelines, and SVG chart rendering. The goal is to serve
              structured JSON and SVG outputs that are easy to integrate.
            </p>

            <p>
              At{" "}
              <a
                href="https://altara.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium italic hover:text-black dark:hover:text-white"
              >
                altara
              </a>
              , I am contributing to AI workflow automation. My work involves
              building tools that leverage LLMs for lead profiling, persona
              modeling, and personalized outreach. I am using Gemini APIs, n8n
              automation, and CRM integration to build complete pipelines.
            </p>

            <p>
              I am actively revising{" "}
              <strong>data structures and algorithms</strong> through daily
              Leetcode practice, focusing on problem-solving strategies and core
              concepts. This is helping reinforce my fundamentals while
              improving problem clarity and implementation speed.
            </p>

            <p>
              On the learning front, I am continuing to explore topics in{" "}
              <strong>machine learning</strong> and{" "}
              <strong>generative AI</strong>. Lately, I’ve been experimenting
              with serving LLM-based systems using FastAPI and LangChain, while
              learning more about embedding search and prompt design.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
