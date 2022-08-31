import React from "react";
import IndividualBooking from "./IndividualBooking";


const ListBookings = ({bookings, handleOnClick, updateBooking, handleDeleteBooking})=>{
    const bookingsNodes = bookings.map((booking, index) =>{
        return <IndividualBooking handleDeleteBooking={handleDeleteBooking} updateBooking={updateBooking} handleOnClick={handleOnClick} booking={booking} key={index}/>
    })

    return(
        <div>
            <ul>
                {bookingsNodes}
            </ul>
        </div>


    )
}

export default ListBookings;