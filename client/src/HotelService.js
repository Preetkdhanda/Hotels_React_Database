const baseUrl = 'http://localhost:9000/api/hotel/';

export const getHotel= ()=>{

    return fetch(baseUrl)
    .then (res => res.json())
}

export const postBooking = (booking) =>{

    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}


export const updateBooking = (booking, id) => {
    console.log(booking,id)

    return fetch(baseUrl + id, {
        method: 'PUT',
        body: JSON.stringify(booking),
        headers:{'Content-Type' : 'application/json'}
    })
    
}

export const deleteBooking = (id) => {
    return fetch(baseUrl + id, {
        method: 'DELETE',
    })
    
}