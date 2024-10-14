import '../index.css';
import { HorizontalCard } from '../component/CardCourses/Card'
import Layout from '../component/Layout/pagesLayout';

function Dashboard() {
  return (
      <Layout>
        <div className="flex-grow p-4 dark:bg-dark-gray">
            <h1 className='font-bold text-5xl text-custom-red dark:text-white mb-8'>My Courses</h1>
            <HorizontalCard />
        </div>  
      </Layout>
  );
}

export default Dashboard;
