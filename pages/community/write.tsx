import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="input resize-none mt-1 shadow-sm w-full"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="button mt-2 w-full hover:ring-2">
        Submit
      </button>
    </form>
  );
};

export default Write;