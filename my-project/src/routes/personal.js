function PersonalInformation(){
    return (
        <>
        <div className="grid grid-cols-1 gap-x-12">
        <div className="col-span-1 grid place-items-center">
                <div className="font-bold text-center">PATIENT TYPE:
                    <div className="grid grid-flow-col auto-cols-max p-2.5">
                        <div>
                            <div class="flex flex-row">
                                <input id="per_stud" type="radio" name="Patient" value="Student" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                                <label for="per_stud" class="block mr-4 text-sm font-medium text-black"> Student</label>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-row">
                                <input id="per_pat" type="radio" name="Patient" value="Faculty" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                                <label for="per_pat" class="block mr-4 text-sm font-medium text-black"> Faculty</label>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-row">
                                <input id="per_staff" type="radio" name="Patient" value="Staff" class="flex items-center mr-4 w-4 h-4 border-blue-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-blue-700 dark:border-blue-600" checked/>
                                <label for="per_staff" class="block mr-4 text-sm font-medium text-black"> Staff</label>
                            </div>
                        </div>
                    </div>
                </div> 

			    <div className="font-bold text-center">ID NUMBER:
                    <div className="col-span-3 lg:col-span-1">
                        <input type="number" id="id_num" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2" required/>
                    </div>  
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-x-12"> 
            {/* patient input */}
            
            {/* end patient input */}
	        <div class="col-span-3 lg:col-span-1">
		        <div className="font-bold">PHOTO:
                    <div className="px-36 col-span-3 lg:col-span-1">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYVEvttsDPxq1WlChcFuWSsIfkb6wEa8ttg&usqp=CAU"
                        class="w-44 h-44 rounded border p-0 dark:border-neutral-700 dark:bg-neutral-800"
                        alt="..." />                 
                    </div>
                </div>
          
			    <div className="font-bold">FULL NAME:</div>
                    <div>
                        <input type="text" id="full_name" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
		    </div>
		  
		          
            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">COLLEGE/DEPT.:
                    <div>
                        <input type="text" id="colldept" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div> 
                <div className="font-bold">DATE OF BIRTH:
                    <div>
                        <input type="text" id="bdate" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div>
                <div className="font-bold">AGE:
                    <div>
                        <input type="text" id="age" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div>
                <div className="font-bold">SEX:
                    <div>
                        <input type="text" id="sex" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div>
            </div>

            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">CIVIL STATUS:
                    <div>
                        <input type="text" id="civil" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div> 
                <div className="font-bold">HOME ADDRESS:
                    <div>
                        <input type="text" id="h_add" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div>
                <div className="font-bold">PRESENT ADDRESS:
                    <div>
                        <input type="text" id="pres_add" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div>
                <div className="font-bold">MOBILE NUMBER:
                    <div>
                        <input type="text" id="mob_num" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>
                </div>
		    </div>
        </div>
        </>
    )
}

export default PersonalInformation