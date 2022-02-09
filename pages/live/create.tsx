import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className=" space-y-4 px-4 py-16">
      <div className="space-y-4">
        <div className="space-y-1">
          <label>Name</label>
          <div className=" flex items-center">
            <input type="text" placeholder="Name" className="input w-full" />
          </div>
        </div>
        <div className="space-y-1">
          <label>Price</label>
          <div className=" flex items-center">
            <div className="absolute left-6 text-gray-500">
              <span>$</span>
            </div>
            <input type="text" placeholder="0.00" className="input w-full" />
            <div className="absolute right-6 text-gray-500">
              <span>USD</span>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <label>Description</label>
          <div>
            <textarea rows={4} className="input w-full resize-none" />
          </div>
        </div>
      </div>
      <button className="button w-full hover:ring-2">Go Live</button>
    </div>
  );
};

export default Create;
