import '../index.css';
import Layout from '../component/Layout/pagesLayout';
import UserProfile from "../component/Dashboard/UsrCard"

function Dashboard() {
  return (
      <Layout>
        <div className="flex-grow dark:bg-dark-gray">
            <UserProfile />
        </div>  
      </Layout>
  );
}

export default Dashboard;
