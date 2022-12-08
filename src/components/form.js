import React , {useState} from "react"

const Form = (props)=> {
    const [inputValue,setInputValue]=useState("");
    const Submit = (event)=>{
        event.preventDefault()
        console.log(inputValue);
        if (inputValue === "" ){
             alert("username cant be empty")
             return;
        };
        props.setUsername(inputValue);
    };
    return(
        <form onSubmit={Submit}>
            <input 
            onChange={(event)=>{
                console.log(event.target.value);
                setInputValue(event.target.value);
            }}
            value={inputValue}
            placeholder="username">
            </input>
            <button type='submit'>Save</button>
        </form>

    );
};

export default Form;