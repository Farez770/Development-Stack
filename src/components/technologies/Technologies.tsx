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
      <div className="mb-10 text-center md:text-start">
        <h1 className="font-extrabold text-3xl md:text-3xl lg:text-4xl mb-2">
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
      <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-4 xl:gap-4 2xl:gap-8">
        {/* justify-center */}
        {/* Technology Card */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-4 lg:gap-3 xl:gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
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
        <div className="w-full lg:w-[270px] xl:w-[300px] 2xl:w-[320px]">
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
