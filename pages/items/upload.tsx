import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <div className="border-2 border-dashed hover:border-orange-500">
          <label className="group flex cursor-pointer place-content-center py-20">
            <svg
              className="h-12 w-12 group-hover:text-orange-500"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="my-5">
        <label>Price</label>
        <div className="mt-1 flex items-center">
          <div className="absolute left-6 text-gray-500">
            <span>$</span>
          </div>
          <input
            type="text"
            placeholder="0.00"
            className="input w-full"
          />
          <div className="absolute right-6 text-gray-500">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div className="my-1">
          <textarea
            rows={4}
            className="input w-full resize-none"
          />
        </div>
      </div>
      <button className="mt-4 button hover:ring-2 w-full">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
