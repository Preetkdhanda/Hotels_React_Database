import React from "react";
import Hotel from "../container/Hotel";

const IndividualBooking = ({booking, handleOnClick, handleDeleteBooking})=>{



    return(
        <div>
            <h3>Customer: {booking.name}</h3>
            <p>Email: {booking.email}</p>
            <p>Status: { booking.checkin ? 'Checked in': 'Not Checked In'}</p>
            <button onClick={()=>handleOnClick(booking,booking._id)}> { booking.checkin ? 'Check Out' : 'Check In'}</button>
            <button onClick={()=>handleDeleteBooking(booking._id)}> Delete Booking</button>

        </div>

    )
}

export default IndividualBooking;