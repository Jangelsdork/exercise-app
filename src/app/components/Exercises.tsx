import { dela } from "../fonts";

type Props = {
    apiRes: any; 
}

export default function Exercises({apiRes}:Props) {


    const eachResult = apiRes.map((line:any, index:number) => {
            const regex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            // scrubs html from the description
            const desc = line.description.replace(regex, "")


            return(
                <div key={index} className="">
                <ul  className="sm:grid sm:grid-cols-2 m-8 border-[1px] border-slate-600 p-2 text-xs sm: text-s">
                    <li className={`tracking-wider text-xs sm:text-xl ${dela.className}`}>{line.name}</li>
                    <li className="font-thin m-2">{desc}</li>
                </ul>
                </div>
            )
    })


    return(
    <div>
  {eachResult}
    </div>
)
}