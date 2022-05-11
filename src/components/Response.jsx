import React, { useEffect, useState} from 'react';

const Response = (props) => {

    const [reply, setReply] = useState("")

    useEffect(() => {
        //adds response
        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify({prompt: props.prompt, "temperature" : .6, "max_tokens" : 60 }),
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setReply(res.choices[0].text);
        });
    },[props.prompt])

    return(
        <div className='mx-auto d-flex justify-content-center align-items-center p-3'>
            <p className='w-50'><b>Prompt:</b> {props.prompt} </p>
            <p className='w-50'><b>Reply:</b> {reply} </p>
        </div>
    )
}

export default Response;