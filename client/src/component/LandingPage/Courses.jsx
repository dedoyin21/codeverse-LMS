export default function Courses() {
  return(

    <div className="bg-custom-cream  flex flex-col justify-center items-center text-center gap-3 p-4 md:p-6">
      <div className="justify-center items-center">
        <h1 className="text-3xl font-bold text-black pb-2 md:pb-8">Powerful Features</h1>
        <p>Special features which help you keep students on track and engaged during class time.</p>
      </div> 
      <div className="flex flex-col md:flex-row gap-3 md:gap-12 p-4 md:p-6">
        <div className="md:w-[500px] mt-4 md:mt-20">
          <p className="italic font-bold">“Learning happens everywhere, all the time and
            we are there to ensure that your connected
            with learning community when it happens.”
          </p>
        </div>
        <div>
          <img src="/womanlearning.png" alt="" />
        </div>
      </div>
    </div>

  )
}

