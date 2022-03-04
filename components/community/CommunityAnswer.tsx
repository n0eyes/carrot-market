import React from "react";

interface CommunityAnswer {
  writer: string;
  content: string;
}

function CommunityAnswer({ writer, content }: CommunityAnswer) {
  return (
    <div className=" space-y-5 py-4">
      <div className="flex items-start space-x-3">
        <div className="h-8 w-8 rounded-full bg-slate-200" />
        <div>
          <span className="block text-sm font-medium text-gray-700">
            {writer}
          </span>
          <span className="block text-xs text-gray-500 ">2시간 전</span>
          <p className="mt-2 text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityAnswer;
