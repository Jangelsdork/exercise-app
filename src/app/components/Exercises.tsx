type Props = {
    apiRes: object[]; 
}

export default function Exercises({apiRes}:Props) {


    const eachResult = apiRes.map((line, index) => {
            console.log(line)
            const regex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
            const desc = line.description.replace(regex, "")

            return(
                <ul className="ml-2">
                    <li className="font-medium">{line.name}</li>
                    <li className="font-thin m-2">{desc}</li>
                </ul>
            )
    })


    return(
    <div>
  {eachResult}
    </div>
)
}