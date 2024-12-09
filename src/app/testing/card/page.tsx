import Image from "next/image";

export default function Card() {
  return (
    <div className="min-h-screen bg-linear-45 from-sky-500 via-white to-pink-500 flex items-center justify-center p-4">
      <div className="perspective-distant ">
        <article className="relative w-[380px] transform-3d rotate-x-51 rotate-z-43 shadow-xl shadow-black/50 hover:shadow-black transition-all duration-500 hover:-translate-y-4 hover:rotate-x-49 hover:rotate-z-38 hover:shadow-2xl rounded-2xl">
          {/* Card Content */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Image */}
            <Image
              src="https://t4.ftcdn.net/jpg/05/72/82/85/360_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg"
              alt="Workspace"
              className="h-[200px] w-full object-cover "
              height={200}
              width={380}
              unoptimized
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b rounded-2xl from-transparent via-transparent to-black/50" />

            {/* Content */}
            <div className="relative p-6 rounded-b-2xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-black">Mar 16, 2020</span>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-300" />
                  <span className="text-sm text-black">Michael Foster</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Boost your conversion rate
              </h3>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
