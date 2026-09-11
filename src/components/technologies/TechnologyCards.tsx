import { FaStar } from "react-icons/fa";
import type { ItechnologiType } from "./type";

type Props = {
  technology: ItechnologiType;
  isSelected: boolean;
  onAdd: (technology: ItechnologiType) => void;
};

export default function TechnologyCards({
  technology,
  isSelected,
  onAdd,
}: Props) {
  return (
    <div className="w-full">
      <div
        className={` w-full max-w-[620px] md:max-w-[380px] min-h-[340px] md:min-h-[400px] rounded-3xl md:rounded-[30px] ${isSelected ? "border-2 border-green-500" : "border border-slate-200 "}  bg-white p-6 md:p-7 shadow-[0_4px_15px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]`}
      >
        <div className="flex items-center justify-between gap-2 md:hidden">
          {/* Left side: Icon + Name */}
          <div className="flex min-w-0 items-center gap-3">
            {/* Icon Background */}
            <div
              className=" flex h-14  w-14 shrink-0 items-center justify-center rounded-xl
               bg-sky-50 "
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-10 w-10 object-contain"
              />
            </div>

            {/* Name */}
            <h2 className=" truncate text-xl font-bold tracking-tight  text-slate-900">
              {technology.name}
            </h2>
          </div>

          {/* Badge */}
          <span
            className=" shrink-0 rounded-full bg-sky-100
              px-4 py-2 text-sm font-semibold text-sky-700 "
          >
            {technology.badge}
          </span>
        </div>

        <div className="hidden items-start justify-between md:flex">
          {/* Technology Icon */}
          <div className=" flex h-14 w-14 items-center justify-center ">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Badge */}
          <span
            className=" rounded-full border border-sky-100 bg-sky-50 px-5 py-2 text-base font-medium
              text-sky-500"
          >
            {technology.badge}
          </span>
        </div>

        <h2
          className=" mt-6 hidden text-3xl  font-bold
            text-slate-900 md:block"
        >
          {technology.name}
        </h2>

        <p
          className="mt-4 text-base text-slate-500 md:mt-4
            md:min-h-[96px] mdtext-lg md:leading-7"
        >
          {technology.description}
        </p>

        <div className="divider"></div>

        <div className=" flex items-center justify-between gap-3 ">
          {/* Category */}
          <span
            className=" shrink-0 rounded-lg bg-slate-100
              px-3 py-1.5 text-sm font-medium text-slate-600 md:px-4 md:py-2 md:text-base"
          >
            {technology.category}
          </span>

          {/* Difficulty */}
          <span className=" whitespace-nowrap text-sm font-medium text-slate-500 md:text-base">
            {technology.difficulty}
          </span>

          {/* Rating */}
          <div
            className=" flex shrink-0 items-center gap-1.5 text-sm font-medium text-slate-700 md:gap-2
            md:text-base"
          >
            <FaStar className="text-yellow-400" />

            <span>{technology.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isSelected}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-medium transition-all duration-300 active:scale-[0.98] md:mt-6 md:rounded-2xl md:px-6 md:py-3.5 md:text-lg cursor-pointer ${
            isSelected
              ? `border-2 border-green-500 bg-transparent text-green-500 `
              : ` border-2  bg-slate-950 text-white hover:bg-slate-800`
          } `}
        >
          {isSelected ? (
            <>
              {/* <FaCheck className="text-base md:text-lg" /> */}
              <span className="text-xl font-semibold">✓ Added to Stack</span>
            </>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
}
