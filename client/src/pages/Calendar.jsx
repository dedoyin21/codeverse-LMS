import '../index.css';
import DashboardLayout from '../Layout/pagesLayout';
import CalendarComponent from '../component/Calendar/Calevents';

function CalendarPage() {
  return (
    <DashboardLayout>
        <h1 className='font-bold text-5xl text-custom-red dark:text-white mb-8'>My Calendar</h1>
        <CalendarComponent />
    </DashboardLayout>
  );
}

export default CalendarPage;
