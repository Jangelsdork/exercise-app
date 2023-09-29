/* eslint-disable import/extensions */
import { useState, SetStateAction, Dispatch, SyntheticEvent } from "react"
import { dela } from "../fonts"

type Props = {
    setUrlMuscle: Dispatch<SetStateAction<number>>; 
    setUrlEquipment: Dispatch<SetStateAction<number>>; 
    fetchResults: () => void;
}

export default function SearchExercise({setUrlMuscle, setUrlEquipment, fetchResults}:Props) {
    const [muscleClicked, setMuscleClicked] = useState<boolean>(false)
    const [equipmentClicked, setEquipmentClicked] = useState<boolean>(false)

    function handleClickM(){
        setMuscleClicked(!muscleClicked)
    }
    function handleClickE(){
        setEquipmentClicked(!equipmentClicked)
    }

    function handleMuscle(e:SyntheticEvent<HTMLDivElement>){
        setUrlMuscle(Number(e.currentTarget.id))
        fetchResults()
        console.log("handled")
    }
    function handleEquipment(e:SyntheticEvent<HTMLDivElement>){
        setUrlEquipment(Number(e.currentTarget.id))
        fetchResults()
    }
    
    function Muscles(){
        if(muscleClicked===true){
            return(
                <div>
                <div className="p-4 hover:bg-slate-500" id="2"onClick={handleMuscle}>Shoulders</div>
                <div className="p-4 hover:bg-slate-500" id="1" onClick={handleMuscle}>Biceps</div>
                <div className="p-4 hover:bg-slate-500" id="11" onClick={handleMuscle}>Hamstring</div>
                </div>
            )
        }
        return(<div></div>)
        
    }
    function Equipment(){
        if(equipmentClicked===true){
            return(
                <div>
                <div className="p-4 hover:bg-slate-500" id="3" onClick={handleEquipment}>Dumbbells</div>
                <div className="p-4 hover:bg-slate-500" id="1" onClick={handleEquipment}>Barbell</div>
                <div className="p-4 hover:bg-slate-500" id="7" onClick={handleEquipment}>Bodyweight</div>
                </div>
            )
        }
        return(<div></div>)

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