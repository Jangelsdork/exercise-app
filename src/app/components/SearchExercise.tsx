import { dela } from "../fonts"
import { useState } from "react"

export default function SearchExercise() {
    const [muscleClicked, setMuscleClicked] = useState<boolean>(false)
    const [equipmentClicked, setEquipmentClicked] = useState<boolean>(false)

    function handleClickM(){
        setMuscleClicked(!muscleClicked)
    }
    function handleClickE(){
        setEquipmentClicked(!equipmentClicked)
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
    function Equipment(){
        if(equipmentClicked===true){
            return(
                <div>
                <div className="p-4 hover:bg-slate-500">Dumbbells</div>
                <div className="p-4 hover:bg-slate-500">Barbell</div>
                <div className="p-4 hover:bg-slate-500">Bodyweight</div>
                </div>
            )
        }

    }

    // make a component to go in the placeholders, that contains all the muscles and equipment that can be selected 
    return (
        <div id="menu-container" className={`grid grid-flow-row grid-cols-2 tracking-wider text-xl p-8 w-full font-d justify-stretch ${dela.className}`}>
            <div id="muscle" className="p-4 hover:bg-slate-500 cursor-pointer auto-rows-max auto-cols-max min-h-0 min-w-0" onClick={handleClickM}>Muscle</div>

            <div id="equipment" className=" p-4 hover:bg-slate-500 cursor-pointer min-h-0 min-w-0" onClick={handleClickE}>Equipment
            </div>
            <div id="top-right-containter" className="row-start-1 col-start-2 min-h-0 min-w-0"><Muscles /></div>
            <div id="bottom-right-containter" className="row-start-2 col-start-2 min-h-0 min-w-0 "><Equipment /></div>
        </div>
    )
}