import City from '../City/City'
import { useState } from 'react';


function Form() {

    const [name, setName] = useState("")

    return(
        <div>
            <h4>Select Your City:</h4>
            <City />
        </div>
    )
}

export default Form