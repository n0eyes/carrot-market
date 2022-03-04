import type { NextPage } from "next";
import { useState } from "react";
import CommunityAnswer from "../../components/community/CommunityAnswer";
import Layout from "../../components/common/Layout";

const CommunityPostDetail: NextPage = () => {
  const [isAnswerOpened, setIsAnswerOpened] = useState(true);

  const onToggleAnswer = () => setIsAnswerOpened((prev) => !prev);

  return (
    <Layout canGoBack>
      <div className="pb-6">
        <span className="my-3 ml-4 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
          동네질문
        </span>
        <div className="mb-3 flex cursor-pointer items-center  space-x-3 border-b pb-3 pt-2">
          <div className="h-10 w-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div>
          <div className="mt-2  text-gray-700">
            <span className="font-medium text-orange-500">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="mt-3  flex w-full space-x-5 border-t border-b-[2px] py-2.5  text-gray-700">
            <span className="flex items-center space-x-2 text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex items-center space-x-2 text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span className="cursor-pointer" onClick={onToggleAnswer}>
                답변 1
              </span>
            </span>
          </div>
        </div>
        {isAnswerOpened && (
          <div className="divide-y-2">
            {[1, 1, 1, 1, 1, 1].map((_, i) => (
              <CommunityAnswer key={i} writer="Seyeon" content="I don't Know" />
            ))}
          </div>
        )}

        <div className="pt-4">
          <textarea
            className="input mt-1 w-full resize-none shadow-sm  "
            rows={4}
            placeholder="Answer this question!"
          />
          <button className="button mt-2 w-full text-lg hover:ring-2">
            Reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
