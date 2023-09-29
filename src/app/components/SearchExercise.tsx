import { dela } from "../fonts"
import { useState } from "react"

export default function SearchExercise() {
    const [muscleClicked, setMuscleClicked] = useState<boolean>(false)
    const [equipmentClicked, setEquipmentClicked] = useState<boolean>(false)

    function handleClick(){
        setMuscleClicked(!muscleClicked)
    }
    
    function Muscles(){
        if(muscleClicked===true){
            return(
                <div>
                <div className="p-4 hover:bg-slate-500">Bicep</div>
                <div className="p-4 hover:bg-slate-500">Tricep</div>
                <div className="p-4 hover:bg-slate-500">Hamstring</div>
                </div>
            )
        }

    }

    // make a component to go in the placeholders, that contains all the muscles and equipment that can be selected 
    return (
        <div id="menu-container" className={`grid grid-flow-col grid-rows-2 grid-cols-2 tracking-wider text-xl p-8 w-full font-d ${dela.className}`}>
            <div id="muscle" className="border-[1px] border-slate-600 p-4 hover:bg-slate-500 cursor-pointer" onClick={handleClick}>Muscle</div>

            <div id="equipment" className="border-[1px] border-slate-600 p-4 hover:bg-slate-500">Equipment
            </div>
            <div id="top-right-containter" className="row-start-1 col-start-2 "><Muscles /></div>
            <div id="top-right-containter" className="row-start-2 col-start-2 ">placeholder 2</div>
        </div>
    )
}