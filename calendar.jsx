function Calendar() {
  return (
    <div className="calendar">
        <div className="clndr">
          <img src="assets/calendar.jpg" alt="" />
        </div>
      <h3>Upcoming Schedule</h3>
      <div className="main-box-wrapper">
        <div className="box one" >
          <li style={{backgroundColor:"Darkblue", color:"white"}}>Dentist 🦷 < br></br> Tue 9AM <br></br>Dr. Rajiv mittal</li>
          <li>Physiotherapy 🧘 <br></br> Thu 11AM <br/>Dr. Garg Verma</li>

        </div>
          <h5>On Thursday</h5>
        <div className="box two">
          <li>Health checkup Complete 👁️ <br></br> 11:00 AM</li>
          <li>Ophthalmologist 👁️ <br></br> 14:00 PM</li>
        </div>
          <h5>On Saturday</h5>
        <div className="box three">
          <li>Cardiologist ❤️ <br></br> 12:00 AM</li>
          <li>Neurologist 🧠 <br></br> 16:00 PM</li>
        </div>
      </div>
    </div>
  );
}
export default Calendar;