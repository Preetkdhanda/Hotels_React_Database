import react, { useEffect, useState } from 'react';
import ListBookings from '../components/ListBookings';
import { deleteBooking, getHotel, postBooking, updateBooking } from '../HotelService';
import BookingForm from '../components/BookingForm';



const Hotel = () => {

    const [bookings, setBookings] = useState([])
    const [newBooking, setNewBooking] = useState("");

    useEffect(()=>{
       retrieveBookings()

    },[])

    const retrieveBookings = () =>
    {
        getHotel().then((allBookings)=>{
            setBookings(allBookings)
        })
    }


    const saveNewBooking = (booking) => {
        
       postBooking(booking)
       .then(result => {
        const copyBookings = [...bookings, result];
        setBookings(copyBookings)
       })
    }

    const handleOnClick = (booking,id) => {

        updateBooking({
            name: booking.name,
            email: booking.email,
            checkin: !booking.checkin // it'll swap the boolean value to whatever it was - logical negation

        }, id)
        .then(
            retrieveBookings
      )}


    const handleDeleteBooking = (id) => {
       
        const copyBookings = bookings.map(s=>s)
        const deleteBook = copyBookings.map(s => s._id).indexOf(id);
        copyBookings.splice(deleteBook,1)
        deleteBooking(id)
        setBookings(copyBookings)
    }

    

    return(

        <div>
            <h1>Bookings</h1>
            <ListBookings bookings={bookings} handleOnClick={handleOnClick} handleDeleteBooking={handleDeleteBooking} updateBooking={updateBooking}/>
            <BookingForm saveNewBooking={saveNewBooking} />
            
        </div>
    )
}



export default Hotel;