import { React, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function NewAccordion() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i){
      return setSelected(null) 
    }
    setSelected(i)
  }
  const [time, setTime] = useState("");
  const [time2, setTime2] = useState("");
  const [time3, setTime3] = useState("");
  const handleTimeChange = (e) => {
        setTime(e.target.value);
};
  const handleTimeChange2 = (e) => {
  setTime2(e.target.value);
};
  const handleTimeChange3 = (e) => {
  setTime3(e.target.value);
};
    

const data = [
  {
    question: <p className='font-bold'>PERSONAL INFORMATION</p>,
    answer: <ul className='flex flex-wrap font-semibold gap-x-20'>
            <div className="grid grid-cols-1">
                <div className="col-span-1 grid place-items-center">
                    <div className="font-bold text-center">PATIENT TYPE:
                        <div className="grid grid-flow-col auto-cols-max p-2.5">
                            <div>
                                <div class="flex flex-row">
                                    <input id="per_stud" type="radio" name="Patient" value="Student" class="cursor-not-allowed flex items-center mr-4 w-4 h-4" disabled/>
                                    <label for="per_stud" class="block mr-4 text-sm font-medium text-black"> Student</label>
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-row">
                                    <input id="per_pat" type="radio" name="Patient" value="Faculty" class="cursor-not-allowed flex items-center mr-4 w-4 h-4" disabled/>
                                    <label for="per_pat" class="block mr-4 text-sm font-medium text-black"> Faculty</label>
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-row">
                                    <input id="per_staff" type="radio" name="Patient" value="Staff" class="cursor-not-allowed flex items-center mr-4 w-4 h-4" disabled/>
                                    <label for="per_staff" class="block mr-4 text-sm font-medium text-black"> Staff</label>
                                </div>
                            </div>
                        </div>
                </div> 

			    <div className="font-bold text-center">ID NUMBER:
                    <div className="col-span-3 lg:col-span-1">
                        <input type="number" id="id_num" class="cursor-not-allowed border border-black text-black text-sm rounded-lg block w-full p-2" value="2019-3172" readOnly/>
                    </div>  
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-x-12"> 
            {/* patient input */}
            
            {/* end patient input */}
	        <div class="col-span-3 lg:col-span-1">
		        <div className="font-bold">PHOTO:
                    <div className="col-span-3 lg:col-span-1">
                        <img
                        src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                        class="h-44 max-w-md mx-auto rounded border p-0 dark:border-neutral-700 dark:bg-neutral-800"
                        alt="..." />                 
                    </div>
                </div>
          
			    <div className="font-bold">FULL NAME:</div>
                    <div>
                        <input type="text" id="full_name" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
		    </div>
		  
		          
            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">COLLEGE/DEPT.:
                    <div>
                        <input type="text" id="colldept" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div> 
                <div className="font-bold">DATE OF BIRTH:
                    <div>
                        <input type="text" id="bdate" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">AGE:
                    <div>
                        <input type="text" id="age" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">SEX:
                    <div>
                        <input type="text" id="sex" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div>
            </div>

            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">CIVIL STATUS:
                    <div>
                        <input type="text" id="civil" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div> 
                <div className="font-bold">HOME ADDRESS:
                    <div>
                        <input type="text" id="h_add" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">PRESENT ADDRESS:
                    <div>
                        <input type="text" id="pres_add" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">MOBILE NUMBER:
                    <div>
                        <input type="text" id="mob_num" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div>
		    </div>
        </div>
    </ul>,
  },

  {
    question: <p className='font-bold'>MEDICAL RECORD</p>,
    answer: <ul className='font-semibold my-5'>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">PAST MEDICAL HISTORY</button>
                    <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">FAMILY HISTORY</button>
                    <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">SOCIAL HISTORY</button>
                    <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">VITAL SIGNS AND OTHERS</button>
                    <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">PHYSICAL EXAMINATION</button>
                    <button class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">ASSESSMENT AND RECOMMENDATIONS</button>
                </div>

                <div class="my-10">
                    <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">CHECK UP</button>
                </div>
            </ul>,
  },
]


return (
    <div className='wrapper'>
      <div className='accordion'>
          {data.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? <MdKeyboardArrowUp size={28}/> : <MdKeyboardArrowDown size={28}/> }</span>
              </div>
              <div 
                  className={
                    selected === i ? 'content show' : 'content '
                    }
              >
                {item.answer}
              </div>
        </div>
          ))}
  
      </div>
    </div>
    )
  }
export default NewAccordion; 