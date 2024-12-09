export default function Buttons() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-4">
        <label className="block">
          <span className="block text-sm font-medium text-gray-400 mb-1">
            Add your comment
          </span>
          <textarea className="field-sizing-content text-sm text-gray-200 bg-gray-800 border border-gray-600 rounded-md focus:ring focus:ring-blue-500 focus:outline-none resize-none px-2 w-[260px] py-1"></textarea>
        </label>
        <button className="shadow-md inset-shadow-sm inset-shadow-white/35 ring ring-blue-600 inset-ring inset-ring-white/15 bg-sky-600 rounded-lg py-2 px-4 hover:bg-black transition-colors duration-300">
          BUTTON WITH INSET SHADOW
        </button>
      </div>
    </div>
  );
}
