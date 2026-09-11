import { use, useState } from "react";
import type { ItechnologiType } from "./type";
import TechnologyCards from "./TechnologyCards";
import YourStack from "./YourStack";
import { Bounce, toast } from "react-toastify";

type Props = {
  TechnologyDataPromise: Promise<ItechnologiType[]>;
};

export default function Technologies({ TechnologyDataPromise }: Props) {
  const technologyData = use(TechnologyDataPromise);
  // console.log(technologyData);

  const [selectedTechnology, setSelectedTechnology] = useState<
    ItechnologiType[]
  >([]);

  const handleAddTechnology = (technology: ItechnologiType) => {
    setSelectedTechnology((prevTechnology) => {
      const isAlreadySelected = prevTechnology.some(
        (tech) => tech.id === technology.id,
      );

      if (isAlreadySelected) {
        return prevTechnology;
      }
      return [...prevTechnology, technology];
    });

    // toast.success(`${technology.name} add to stack Successfully`);
    toast.success(`${technology.name} Add to the stack Successfully`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveTechnology = (id: string) => {
    setSelectedTechnology((prevTech) =>
      prevTech.filter((technologys) => technologys.id !== id),
    );

    toast.info(`${id} Remove from the Stack Successfully`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setSelectedTechnology([]);

    toast.info(`Stack is Clear`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="mb-20 container mx-auto px-6">
      <div className="mb-10">
        <h1 className="font-extrabold text-4xl mb-2">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#ec4899]  to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className=" text-[#64748b]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      {/* ------- below the card section (Left) and the stack section (right) */}
      <div className="flex flex-col md:flex-row justify-center gap-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {technologyData.map((technology: ItechnologiType) => {
            const isSelected = selectedTechnology.some(
              (selectedTech) => selectedTech.id === technology.id,
            );
            return (
              <TechnologyCards
                key={technology.id}
                technology={technology}
                isSelected={isSelected}
                onAdd={handleAddTechnology}
              ></TechnologyCards>
            );
          })}
        </div>
        <div>
          <YourStack
            selectedTechnology={selectedTechnology}
            removeStack={handleRemoveTechnology}
            removeAllStack={handleRemoveAll}
          ></YourStack>
        </div>
      </div>
    </div>
  );
}
