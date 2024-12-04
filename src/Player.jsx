import { useState } from "react";
export default function Player({name,colour,isActive}){
    const [isEditing,setIsEditing]= useState(false)
    const[editName,setEditName] = useState(name)
    function handleClick(){
        setIsEditing((editing)=>!editing)
    }
    function handleChange(e){
        setEditName(e.target.value)
    }
    let playerName = <span className="player-name">{editName}</span>
    if (isEditing){playerName= <input type="text" required onChange={handleChange}></input>}
    return(
        <li className={isActive ? 'active':undefined}>
                     {playerName}
                    <span className="player-symbol"><button id={colour} ></button></span>
                   
                    <button id="edity" onClick={handleClick}>{isEditing ? "Save" :" Edit"}</button>
                </li>
        
    )
}