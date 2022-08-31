use hotel;
db.dropDatabase();

db.hotel_checkin.insertMany([


    {
        name: "Alex Garcia",
        email: "alex_garcia@gmail.com",
        checkin: true
    },

    {
        name: "Preet Dhanda",
        email: "preet_dhanda@gmail.com",
        checkin: false

    },

    {
        name: "John Maclean",
        email: "john_maclean@gmail.com",
        checkin: false

    }




]);