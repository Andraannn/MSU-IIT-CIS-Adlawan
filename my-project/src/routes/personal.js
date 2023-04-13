function PersonalInformation(){
    return (
        <>
        <h1 className>PERSONAL INFORMATION</h1>
        <div className="flex flex-wrap max-w-4x1">
            {/* PATIENT TYPE */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
                <p className="font-bold">PATIENT TYPE</p>
                    <div className="flex flex-wrap">
                        <input id="per_stud" type="radio" name="Patient" value="Student" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                        <label for="per_stud" class="block mr-4 text-sm font-medium text-black"> Student</label>

                        <input id="per_pat" type="radio" name="Patient" value="Faculty" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                        <label for="per_pat" class="block mr-4 text-sm font-medium text-black"> Faculty</label>

                        <input id="per_staff" type="radio" name="Patient" value="Staff" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                        <label for="per_staff" class="block mr-4 text-sm font-medium text-black"> Staff</label>
                    </div>
            </div>
            {/* END OF PATIENT TYPE */}

            {/* COLLEGE/DEPT */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
                <p className="font-bold">COLLEGE/DEPT:</p>
                <div>
                <select className="border rounded border-black" name="coldep" id="colldept">
                    <option value="CCS">CCS </option>
                    <option value="CSM">CSM</option>
                    <option value="CASS">CASS</option>
                    <option value="COET">COET</option>
                    <option value="CEBA">CEBA</option>
                    <option value="CED">CED</option>
                    <option value="CHS">CHS</option>
                </select>
                </div>

            </div>
            {/* END OF COLLEGE/DEPT */}

            {/* CIVIL STATUS */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
                <p className="font-bold">CIVIL STATUS:</p>
                <div>
                <select className="border rounded border-black" name="civil" id="civil">
                    <option value="single">Single </option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="seperated">Separated</option>
                    <option value="widow">Widowed</option>
                </select>
                </div>
            </div>
            {/* END OF CIVIL STATUS */}

            {/* ID NUMBER */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
            <p className="font-bold">ID NUMBER:</p>
                <div>
                <input type="number" id="id_num" class="border border-black w-48 text-black rounded-lg p-.5" required/>
                </div>
            </div>
            {/* END OF ID NUMBER */}

            {/* DOB */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
            <p className="font-bold">DATE OF BIRTH:</p>
                <div>
                <input className="border rounded border-black" type="date" id="birthday" name="birthday"/>
                </div>
            </div>
            {/* END OF DOB */}

            {/* HOME ADD */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
            <p className="font-bold">HOME ADDRESS:</p>
                <div>
                    <input type="text" id="home_add" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                </div>
            </div>
            {/* END OF HOME ADD */}

            {/* ADD PHOTO */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
            <p className="font-bold">ADD PHOTO:</p>
                <div>
                    <input type="file" id="myFile" name="filename"/>
                </div>
            </div>
            {/* END OF ADD PHOTO */}

            {/* AGE */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
            <p className="font-bold">AGE:</p>
                <div>
                    <input type="number" id="age" class="border border-black w-24 text-black rounded-lg p-.5" required/>
                </div>
            </div>
            {/* END OF AGE */}

            {/* PRESENT ADD */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
            <p className="font-bold">PRESENT ADDRESS:</p>
                <div>
                    <input type="text" id="present_add" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                </div>
            </div>
            {/* END OF PRESENT ADD */}


            {/* FULL NAME */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
                <p className="font-bold">FULL NAME:</p>
                    <div>
                        <input type="text" id="full)name" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                    </div>
            </div>
            {/* FULL NAME */}

            {/* SEX */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
                <p className="font-bold">SEX:</p>
                    <div className="flex flex-wrap">
                        <input id="per_male" type="radio" name="Sex" value="Male" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                        <label for="per_male" class="block mr-4 text-sm font-medium text-black"> Male</label>

                        <input id="per_fem" type="radio" name="Sex" value="Female" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                        <label for="per_fem" class="block mr-4 text-sm font-medium text-black"> Female</label>
                    </div>
            </div>
            {/* END OF SEX */}

            {/* MOBILE NUMBER */}
            <div className="p-4 w-full sm:w-1/3 lg:w-96">
                <p className="font-bold">MOBILE NUMBER:</p>
                    <div>
                        <input type="number" id="per_mobile" class=" border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
                    </div>
            </div>
            {/* END OF MOBILE NUM */}
        </div>
        </>
    )
}

export default PersonalInformation