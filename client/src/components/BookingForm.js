import React, {useState} from "react";
import Hotel from "../container/Hotel";

const BookingForm = ({saveNewBooking}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameInput = (event) => {
        setName(event.target.value)

    }
    const handleEmailInput = (event) => {

        setEmail(event.target.value)
    }

    const onSubmit = (event) =>{

        event.preventDefault();
        saveNewBooking({
            name: name,
            email: email,
            checkin: false
        })
    };
    
    return(


        <div>
        <h3> Add A New Booking</h3>
         <form onSubmit={onSubmit}>        
        <label htmlFor="new-item">Add name:</label>   
        <input id="name" type="text" value={name} onChange={handleNameInput} /> 
        <label htmlFor="new-item">Add email:</label>  
        <input id="email" type="text" value={email} onChange={handleEmailInput} />  
                 
        <input type="submit" value="Save New Booking" />       
      </form>


        </div>
    )
}

export default BookingForm;