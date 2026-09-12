import bannerImg from "../assets/banner-stack.png";

type Props = {};

export default function HeroBanner({}: Props) {
  return (
    <div className="container mx-auto px-6 min-h-[calc(100vh-90px)] flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-7xl text-[#0f172a] mb-6 font-[Inter] text-center md:text-left">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-[#475569] mb-8 lg:mb-10 max-w-2xl text-center md:text-left">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex justify-center md:justify-start flex-row gap-3">
          <button className="btn bg-linear-65 from-[#f97316] to-[#ec4899] text-white font-[inter] font-semibold py-6  rounded-xl">
            Explore Technologies
          </button>

          <button className="btn py-6  font-[inter] font-semibold rounded-xl">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bannerImg}
          alt="Development Stack"
          className="w-full max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}
