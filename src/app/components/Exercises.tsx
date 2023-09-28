type Props = {
    apiRes: object[]; 
}

export default function Exercises({apiRes}:Props) {

    function Results(){
        const eachResult = apiRes.map((line, index) => {
            console.log(line.name)
            return(
                <div>{line.name}</div>
            )
    })
    }

    return(
    <div>
    <Results />
    </div>
)
}