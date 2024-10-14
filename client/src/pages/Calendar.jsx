import '../index.css';
import Layout from '../component/Layout/pagesLayout';
import CalendarComponent from '../component/Calendar/Calevents';

function CalendarPage() {
  return (
    <Layout>
        <h1 className='font-bold text-5xl text-custom-red dark:text-white mb-8'>My Courses</h1>
        <CalendarComponent />
    </Layout>
  );
}

export default CalendarPage;
