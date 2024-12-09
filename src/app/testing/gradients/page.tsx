export default function Gradients() {
  return (
    <div className="size-full flex justify-center items-center gap-5 h-screen">
      <div className="bg-conic/[in_hsl_longer_hue] from-red-600 to-red-600 size-24 rounded-full"></div>
      <div className="bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% size-24 rounded-full"></div>
    </div>
  );
}
