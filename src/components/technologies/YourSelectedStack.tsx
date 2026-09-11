import { FaXmark } from "react-icons/fa6";
import type { ItechnologiType } from "./type";

type Props = {
  technology: ItechnologiType;
  removeStack: (id: string) => void;
};

export default function YourSelectedStack({ technology, removeStack }: Props) {
  return (
    <div className="flex  justify-between items-center border-2 border-gray-200 rounded-xl mb-2 mt-4 p-2">
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <div>
          <h3 className="font-semibold text-base text-slate-900">
            {technology.name}
          </h3>
          <p className="text-sm text-slate-400">{technology.category}</p>
        </div>
      </div>

      {/* Cross button */}
      <button
        onClick={() => removeStack(technology.id)}
        className="flex h-12 w-12 text-2xl items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500"
      >
        <FaXmark />
      </button>
    </div>
  );
}
