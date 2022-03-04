import React from "react";

function MessageInput() {
  return (
    <form className="fixed inset-x-0 bottom-0  bg-white py-2">
      <div className="relative mx-auto flex w-full  max-w-md items-center">
        <input
          type="text"
          className="input w-full rounded-full pr-12  shadow-sm "
        />
        <div className="absolute  inset-y-0 right-0 flex py-1.5 pr-1.5">
          <button
            type="submit"
            className="button flex items-center rounded-full px-3 text-sm"
          >
            &rarr;
          </button>
        </div>
      </div>
    </form>
  );
}

export default MessageInput;
