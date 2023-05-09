import React from "react";

function Dashboard(){
    return(
        <>
        <main class="bg-slate-600 bg-cover flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
        <div class="flex w-full mx-auto px-6 py-8">
            <div class="flex flex-col w-full h-full text-gray-900 text-xl">
                <div className="w-full">
                    <h1 className="py-7 text-black text-4xl text-left font-semibold">Dashboard</h1>
                    <div className='relative bg-white bg-opacity-50 h-40 w-200 rounded-xl shadow x-1 p-2 text-justify'>Test</div>
                    <h1 className='py-3 text-black text-2xl text-left font-bold'>OVERVIEW</h1>
                    <section className="flex justify-between">
                        <div className='bg-white bg-opacity-50 h-40 w-96 rounded-xl shadow x-1 py-2 px-2 text-left text-xl font-semibold'>TOTAL STUDENT PATIENTS</div>
                        <div className='bg-white bg-opacity-50 h-40 w-96 rounded-xl shadow x-1 py-2 px-2 text-left text-xl font-semibold'>TOTAL FACULTY/STAFF PATIENTS</div>
                        <div className='bg-white bg-opacity-50 h-40 w-96 rounded-xl shadow x-1 py-2 px-2 text-left text-xl font-semibold'>TOTAL STAFF PATIENTS</div>
                    </section> 
                    {/* ANNOUNCEMENT BANNER */}
                    <h1 className='py-3 text-black text-2xl text-left font-bold'>ANNOUNCEMENTS</h1>
                    <div className='relative bg-white bg-opacity-50 h-40 w-200 rounded-xl shadow x-1'></div>
                </div>
                
            </div>
        </div>
    </main>
    </>
    )
}

export default Dashboard