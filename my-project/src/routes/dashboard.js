import React from "react";
import StudentPatients from "./student_widget";
import FacultyStaff from "./facultystaff_widget";
import TotalAppointments from "./totalappoint_widget";

function Dashboard(){
    return(
        <>
        <main class="bg-slate-600 bg-cover flex flex-wrap w-full overflow-x-hidden overflow-y-auto mb-14">
        <div class="flex w-full mx-auto px-6 py-8">
            <div class="flex flex-col w-full h-full text-gray-900 text-xl">
                <div className="w-full">
                    <h1 className="py-7 text-black text-4xl text-left font-semibold">Dashboard</h1>
                    <div className="opacity-50">
                        <div className="bg-white w-200 rounded-lg shadow-lg p-4">
                        <p className="text-black">Quote of the Day: "I sought the Lord Jesus Christ, and he answered me, and delivered me from all my fears."</p>
                        </div>
                    </div>
                    <h1 className='py-3 text-black text-2xl text-left font-bold'>OVERVIEW</h1>
                    <section className="container mx-auto">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <StudentPatients />
                            <FacultyStaff />
                            <TotalAppointments />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    </>
    )
}

export default Dashboard