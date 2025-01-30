import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./event";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const allViews = Object.keys(Views).map(k => Views[k]);

const CalendarComponent = () => (
  <div className="calendar-container">
    <Calendar
      localizer={localizer}
      events={events}
      step={60}
      views={allViews}
      defaultDate={new Date(2024, 9, 1)}
      popup={false}
      onShowMore={(events ) => this.setState({ showModal: true, events })}
      style={{ height: '100%', width: '100%' }} // Ensures it fills the container
    />
  </div>
);

export default CalendarComponent;
