import '../index.css'
import Navbar from '../component/header';
import Sidebar from '../component/Sidebar';
import ThemeContextProvider from '../Context/ThemeContextProvider';

function Dashboard() {

  return (
    <ThemeContextProvider>
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white'>
        <Navbar />
        {/* <div>
          <Dashboard />
        </div> */}
      </div>
    </div>
    </ThemeContextProvider>
  )
}

export default Dashboard