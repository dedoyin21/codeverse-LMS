import CoursesList from "../component/CardCourses/Courses/CourseList";
import { CheckCircle, Clock, Star } from "lucide-react";
import React, { useState } from "react";
import { InfoCard } from "../component/CardCourses/_componts/infoCard";
import UserCard from "../component/CardCourses/_componts/UsrCard";
import DashboardLayout from "../component/Layout/oulay";

const BigDashboard = () => {
  // Mock data for demonstration
  const user = { firstName: "John", lastName: "Doe" };
  const [coursesInProgress] = useState([{ id: 1, title: "Course 1" }]); // Static for demonstration
  const [completedCourses] = useState([{ id: 2, title: "Course 2" }]); // Static for demonstration
  const [xp] = useState(75); // Static for demonstration

  return (
    <DashboardLayout>
      <div className="p-6 space-y-4 container">
        <div className="flex flex-col mb-6 md:gap-1 items-center sm:items-start">
          <h1 className="text-lg font-semibold sm:text-xl md:text-2xl sm:font-bold">
            Welcome back {user.firstName?.charAt(0)?.toUpperCase()}
            {user.firstName?.slice(1)}!
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Take a look at your learning progress for today,{" "}
            {new Date(Date.now()).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="bg-secondary border rounded-3xl overflow-hidden">
           <UserCard user={user} xp={xp} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            <InfoCard
              icon={Clock}
              label="In Progress"
              numberOfItems={coursesInProgress.length}
              nameOfItems={"Courses"}
            />
            <InfoCard
              icon={CheckCircle}
              label="Completed"
              numberOfItems={completedCourses.length}
              nameOfItems={"Courses"}
            />
            <InfoCard
              icon={Star}
              label="Points"
              numberOfItems={xp}
              nameOfItems={"XP"}
            />
          </div>
        </div>
        <div className="bg-secondary border rounded-3xl overflow-hidden p-5">
          <CoursesList items={[...coursesInProgress, ...completedCourses]} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BigDashboard;