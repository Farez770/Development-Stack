import type { ItechnologiType } from "./type";
import YourSelectedStack from "./YourSelectedStack";

type Props = {
  selectedTechnology: ItechnologiType[];
  removeStack: (id: string) => void;
  removeAllStack: () => void;
};

export default function YourStack({
  selectedTechnology,
  removeAllStack,
  removeStack,
}: Props) {
  return (
    <div>
      <div className=" rounded-[28px] w-full md:w-[300px] border border-slate-200 bg-white p-6 shadow-[0_3px_8px_rgba(15,23,42,0.06)]">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>

        {/* Subtitle */}
        <p className="mt-2 text-slate-400 text-base">
          {selectedTechnology.length === 0
            ? "No technologies selected yet."
            : `${selectedTechnology.length} technologies selected.`}
        </p>

        {/* Empty Stack Box */}
        {/* <div className=" mt-7 flex h-auto items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 px-4 ">
          <p className="text-center text-slate-400">Your stack is empty.</p>
        </div> */}
        {selectedTechnology.length === 0 ? (
          <div className="mt-8 flex min-h-[100px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          <div>
            {selectedTechnology.map((technology: ItechnologiType) => (
              <div key={technology.id}>
                <YourSelectedStack
                  technology={technology}
                  removeStack={removeStack}
                ></YourSelectedStack>
              </div>
            ))}

            {selectedTechnology.length > 0 && (
              <button
                onClick={() => removeAllStack()}
                className="mt-5 w-full rounded-xl border border-red-500 px-4 py-3 font-medium text-red-500 transition hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
