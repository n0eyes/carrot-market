import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/common/Layout";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="Chats">
      <div className="space-y-6 pb-6">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <a className=" flex cursor-pointer items-center space-x-3 border-y-[1px] py-4 px-4 transition-shadow hover:shadow">
              <div className="h-12 w-12 shrink-0 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
