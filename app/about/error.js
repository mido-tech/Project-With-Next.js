"use client"

export default function error({error , reset}) {
    return(
        <div>
            this ain,t loading up :{error.massage}
            <button onClick={() => reset()}>Reload the data</button>
        </div>
    )
}