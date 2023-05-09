import React from "react";
import StudentPatients from "./widget";
import FacultyStaff from "./widget2";
import TotalAppointments from "./widget3";

function Dashboard(){
    return(
        <>
        <main class="bg-slate-600 bg-cover flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div class="flex w-full mx-auto px-6 py-8">
            <div class="flex flex-col w-full h-full text-gray-900 text-xl">
                <div className="w-full">
                    <h1 className="py-7 text-black text-4xl text-left font-semibold">Dashboard</h1>
                    <div className='relative bg-white bg-opacity-50 h-20 w-200 shadow x-1 p-2 text-justify text-sm md:text-lg lg:text-xl'>Quote of the Day: "I sought the Lord Jesus Christ, and he answered me, and delivered me from all my fears."</div>
                    <h1 className='py-3 text-black text-2xl text-left font-bold'>OVERVIEW</h1>
                    <section className="container mx-auto">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <StudentPatients />
                            <FacultyStaff />
                            <TotalAppointments />
                        </div>
                    </section> 
                    {/* ANNOUNCEMENT BANNER */}
                    <h1 className='py-3 text-black text-2xl text-left font-bold'>ANNOUNCEMENTS</h1>
                    <div className='relative bg-white bg-opacity-50 h-40 w-200 rounded-xl shadow x-1 x-1 p-2 text-justify text-sm md:text-lg lg:text-xl'>Test</div>
                </div>
                
            </div>
        </div>
    </main>
    </>
    )
}

export default Dashboard