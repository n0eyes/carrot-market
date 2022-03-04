import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../../components/common/FloatingButton";
import Layout from "../../components/common/Layout";

const Live: NextPage = () => {
  return (
    <Layout title="Live" hasTabBar>
      <div className="flex flex-col space-y-2 divide-y-2 pb-6">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/live/${i}`} key={i}>
            <a className="cursor-pointer px-4 py-4" key={i}>
              <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
              <h3 className="mt-3 text-lg text-gray-700">
                Let&apos;s try potatoes
              </h3>
            </a>
          </Link>
        ))}
        <FloatingButton href={"/live/create"}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
