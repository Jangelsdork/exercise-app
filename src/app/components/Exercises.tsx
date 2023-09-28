import { dela } from "../fonts";

type Props = {
    apiRes: object[]; 
}

export default function Exercises({apiRes}:Props) {


    const eachResult = apiRes.map((line, index) => {
            console.log(line)
            const regex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            // scrubs html from the description
            const desc = line.description.replace(regex, "")

            return(
                <div key={index} className="">
                <ul  className="grid grid-cols-2 m-2 border-[1px] border-slate-600 p-2">
                    <li className={`tracking-wider ${dela.className}`}>{line.name}</li>
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