import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../../components/common/FloatingButton";
import Layout from "../../components/common/Layout";
import CommunityArticle from "../../components/community/CommunityArticle";

const Community: NextPage = () => {
  return (
    <Layout title="동네생활" hasTabBar>
      <div className="space-y-8 py-6">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <>
            <CommunityArticle
              href={`/community/${i}`}
              key={i}
              title="질문 질문"
              writer="세연"
              timestamp="18시간 전"
              wonder={1}
              answer={1}
            />
          </>
        ))}
        <FloatingButton href="/community/write">
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
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
