import { useState } from "react"
function getSkin(){
    const [skin,setSkin] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(JSON.stringify({name: skin}));
    }
}


funtion Form(){
    return(
        <div className="form--container">
            <form onSubmit={handleSubmit}>
                <label>
                    Busque a skin por nome da arma ou bundle.
                    <input
                     type="text"
                     value={skin} 
                     onChange={(e) => setSkin(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form