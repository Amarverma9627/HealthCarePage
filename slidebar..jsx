function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <h5 style={{opacity:"0.5"}}>General</h5>
        <ul>
          <li><i class="fa fa-align-justify" aria-hidden="true"></i> Dashboard</li>
          <li><i class="fa fa-clock-o" aria-hidden="true"></i> History</li>
          <li><i class="fa fa-table" aria-hidden="true"></i> Calendar</li>
          <li><i class="fa fa-plus-square" aria-hidden="true"></i> Appointments</li>
          <li><i class="fa fa-line-chart" aria-hidden="true"></i> Statistics</li>
        </ul>
      </div>
      <div style={{opacity:"0.6"}}>
        <h5>Tools</h5>
        <ul>
          <li> <i class="fa fa-commenting" aria-hidden="true"></i> Chat</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i> Support</li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;