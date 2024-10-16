import React from "react";
import "../Style/index.css";

export default function Reservation() {

    return (
        <div id="ReservationDiv1">
            <div id="ReservationDiv2">
            <h1>Your Reservations</h1>

            <div id="ReservationDivp">Oops! You have not made any reservations yet! (Click <a href="/">here</a> to explore some cities)</div>
             <table className="table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Booking Name</th>
                            <th>Adventure</th>
                            <th>Person(s)</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Booking Time</th>
                            <th>Action</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody id="reservation-table">

                    </tbody>
                </table>

            </div> 
        </div>
    );
}
