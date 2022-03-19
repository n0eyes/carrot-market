import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../@components/common/Layout";
import ProfileNavButton from "../@components/profile/ProfileNavButton";
import ProfileReview from "../@components/profile/ProfileReview";

const Profile: NextPage = () => {
  return (
    <Layout title="Profile" hasTabBar>
      <div className="py-10">
        <div className="flex items-center space-x-3">
          <div className="h-16 w-16 rounded-full bg-slate-500" />
          <div className="flex flex-col">
            <span className="font-medium text-gray-900">Steve Jebs</span>
            <Link href={"/profile/edit"}>
              <a className="text-sm text-gray-700">Edit profile &rarr;</a>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex justify-around">
          <ProfileNavButton href="/profile/sold" nav="판매 내역">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </ProfileNavButton>
          <ProfileNavButton href="/profile/bought" nav="구매 내역">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </ProfileNavButton>
          <ProfileNavButton href="/profile/loved" nav="찜한 목록">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </ProfileNavButton>
        </div>
        <div className=" mt-12 flex flex-col space-y-2 divide-y-2">
          {[1, 1, 1].map((_, i) => (
            <ProfileReview
              writer="세연"
              grade={3}
              content="Very Good!!"
              key={i}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
