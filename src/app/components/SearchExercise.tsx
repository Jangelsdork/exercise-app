/* eslint-disable import/extensions */
import { useState, SetStateAction, Dispatch, SyntheticEvent } from "react";
import { dela } from "../fonts";

type Props = {
  setUrlMuscle: Dispatch<SetStateAction<number>>;
  setUrlEquipment: Dispatch<SetStateAction<number>>;
  fetchResults: () => void;
};

export default function SearchExercise({
  setUrlMuscle,
  setUrlEquipment,
  fetchResults,
}: Props) {
  const [muscleClicked, setMuscleClicked] = useState<boolean>(false);
  const [equipmentClicked, setEquipmentClicked] = useState<boolean>(false);

  function handleClickM() {
    setMuscleClicked(!muscleClicked);
  }
  function handleClickE() {
    setEquipmentClicked(!equipmentClicked);
  }

  function handleMuscle(e: SyntheticEvent<HTMLDivElement>) {
    setUrlMuscle(Number(e.currentTarget.id));
    fetchResults();
    console.log("handled");
  }
  function handleEquipment(e: SyntheticEvent<HTMLDivElement>) {
    setUrlEquipment(Number(e.currentTarget.id));
    fetchResults();
  }

  function Muscles() {
    if (muscleClicked === true) {
      return (
        <div className="flex flex-col sm:max-h-[50vh] sm:flex-wrap">
          <div className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer" id="2" onClick={handleMuscle}>
            Shoulders
          </div>
          <div className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer" id="1" onClick={handleMuscle}>
            Biceps
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="11"
            onClick={handleMuscle}
          >
            Hamstring
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="13"
            onClick={handleMuscle}
          >
            Brachialis
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="7"
            onClick={handleMuscle}
          >
            Calves
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="8"
            onClick={handleMuscle}
          >
            Glutes
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="12"
            onClick={handleMuscle}
          >
            Lats
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="14"
            onClick={handleMuscle}
          >
            Obliques
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="4"
            onClick={handleMuscle}
          >
            Chest
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="10"
            onClick={handleMuscle}
          >
            Quads
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="3"
            onClick={handleMuscle}
          >
            Serratus anterior
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="15"
            onClick={handleMuscle}
          >
            Soleus
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="9"
            onClick={handleMuscle}
          >
            Traps
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="4"
            onClick={handleMuscle}
          >
            Triceps
          </div>
        </div>
      );
    }
    return <div></div>;
  }
  function Equipment() {
    if (equipmentClicked === true) {
      return (
        <div className="flex flex-col max-h-[50vh]">
          <div
            className="p-4 hover:bg-slate-500 text-xs sm:text-s cursor-pointer"
            id="3"
            onClick={handleEquipment}
          >
            Dumbbells
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="1"
            onClick={handleEquipment}
          >
            Barbell
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="7"
            onClick={handleEquipment}
          >
            Bodyweight
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="10"
            onClick={handleEquipment}
          >
            Kettlebell
          </div>
          <div
            className="p-4 hover:bg-slate-500 text-xs sm: text-s cursor-pointer"
            id="2"
            onClick={handleEquipment}
          >
            EZ Bar
          </div>
        </div>
      );
    }
    return <div></div>;
  }

  // make a component to go in the placeholders, that contains all the muscles and equipment that can be selected
  return (
    <div
      id="menu-container"
      className={`grid grid-flow-row grid-cols-2 tracking-wider text-xl p-8 font-d justify-stretch ${dela.className}`}
    >
      <div
        id="muscle"
        className="p-4 hover:bg-slate-500 cursor-pointer auto-rows-max auto-cols-max text-xs sm:text-xl border-[1px] border-t-transparent border-l-transparent border-r-transparent border-slate-600"
        onClick={handleClickM}
      >
        Muscle
      </div>

      <div
        id="equipment"
        className=" p-4 hover:bg-slate-500 cursor-pointer min-h-0 text-xs sm:text-xl"
        onClick={handleClickE}
      >
        Equipment
      </div>
      <div
        id="top-right-containter"
        className="row-start-1 col-start-2 min-h-0 min-w-0 border-[1px] border-t-transparent border-l-transparent border-r-transparent border-slate-600"
      >
        <Muscles />
      </div>
      <div
        id="bottom-right-containter"
        className="row-start-2 col-start-2 min-h-0 min-w-0  "
      >
        <Equipment />
      </div>
    </div>
  );
}
