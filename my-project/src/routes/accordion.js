import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function Accordion() {
    
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
                        <input type="number" id="id_num" class="cursor-not-allowed border border-black text-gray-900 text-sm rounded-lg block w-full p-2" value="2019-3172" readOnly/>
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
    question: <p className='font-bold '>PAST MEDICAL HISTORY</p>,
    answer: <ul className=' flex flex-wrap font-semibold'>
            <div className="grid grid-cols-2">
            {/* item */}
                <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                    <div className="col-span-1">
                        <p className="font-bold mr-2">ALLERGIES</p> 
                    </div>
                    <div className="col-span-2">
                        <span className="font-bold mr-2">:</span> 
                        <input type="radio" className="inline-flex cursor-not-allowed" id="allergies_y" name="allergies" value="Yes" disabled/>
                        <label className="mr-5" htmlFor="allergies_y">YES</label>
                        <input type="radio" className="inline-flex cursor-not-allowed" id="allergies_n" name="allergies" value="No" disabled/>
                        <label className="mr-2" htmlFor="allergies_n">NO</label>
                    </div>
                </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">GALLBLADDER STONE</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="gall_y" name="gallbladder" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="gall_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="gall_n" name="gallbladder" value="No" disabled/>
                    <label className="mr-2" htmlFor="gall_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">PROSTATE PROBLEMS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="pros_y" name="prostate" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="pros_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="pros_n" name="prostate" value="No" disabled/>
                    <label className="mr-2" htmlFor="pros_n">NO</label>
                </div>
                
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">AMOEBIASIS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="amoeb_y" name="amoebiasis" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="amoeb_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="amoeb_n" name="amoebiasis" value="No" disabled/>
                    <label className="mr-2" htmlFor="amoeb_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">GOITER</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="goiter_y" name="goiter" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="goiter_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="goiter_n" name="goiter" value="No" disabled/>
                    <label className="mr-2" htmlFor="goiter_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">SEIZURE</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="seiz_y" name="seizure" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="seiz_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="seiz_n" name="seizure" value="No" disabled/>
                    <label className="mr-2" htmlFor="seiz_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">ANEMIA</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="anemia_y" name="anemia" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="anemia_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="anemia_n" name="anemia" value="No" disabled/>
                    <label className="mr-2" htmlFor="anemia_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">GOUT</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="gout_y" name="gout" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="gout_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="gout_n" name="gout" value="No" disabled/>
                    <label className="mr-2" htmlFor="gout_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">SINUSITIS/ALLERGIC RHINITIS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="sinus_y" name="sinusitis_allergic" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="sinus_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="sinus_n" name="sinusitis_allergic" value="No" disabled/>
                    <label className="mr-2" htmlFor="sinus_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">ARTHRITIS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="arth_y" name="arthritis" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="arth_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="arth_n" name="arthritis" value="No" disabled/>
                    <label className="mr-2" htmlFor="arth_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">HEMORROIDS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hemor_y" name="hemorroids" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="hemor_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hemor_n" name="hemorroids" value="No" disabled/>
                    <label className="mr-2" htmlFor="hemor_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">SKIN DISORDERS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="skin_y" name="skin_disorders" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="skin_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="skin_n" name="skin_disorders" value="No" disabled/>
                    <label className="mr-2" htmlFor="skin_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">BACK AND JOINT PAINS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="back_y" name="back_joint_pains" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="back_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="back_n" name="back_joint_pains" value="No" disabled/>
                    <label className="mr-2" htmlFor="back_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">HEPATITIS: A/B/C</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hepa_y" name="hepatitis" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="hepa_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hepa_n" name="hepatitis" value="No" disabled/>
                    <label className="mr-2" htmlFor="hepa_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">STI/HIV</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="sti_y" name="sti_hiv" value="Yes"disabled/>
                    <label className="mr-5" htmlFor="sti_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="sti_n" name="sti_hiv" value="No" disabled/>
                    <label className="mr-2" htmlFor="sti_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">BONE FRACTURE</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="bone_y" name="bone_fracture" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="bone_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="bone_n" name="bone_fracture" value="No" disabled/>
                    <label className="mr-2" htmlFor="bone_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">HYPER ACIDITY/ULCER</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hypera_y" name="hyperacidity_ulcer" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="hypera_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hypera_n" name="hyperacidity_ulcer" value="No" disabled/>
                    <label className="mr-2" htmlFor="hypera_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">STROKE</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="stroke_y" name="stroke" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="stroke_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="stroke_n" name="stroke" value="No" disabled/>
                    <label className="mr-2" htmlFor="stroke_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">BREAST MASS/ LUMP</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="breast_y" name="breastmass_lump" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="breast_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="breast_n" name="breastmass_lump" value="No" disabled/>
                    <label className="mr-2" htmlFor="breast_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">HYPERTENSION</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hypert_y" name="hypertension" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="hypert_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="hypert_n" name="hypertension" value="No" disabled/>
                    <label className="mr-2" htmlFor="hypert_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">SURGERY/INJURY</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="surgery_y" name="surgery_injury" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="surgery_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="surgery_n" name="surgery_injury" value="No" disabled/>
                    <label className="mr-2" htmlFor="surgery_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">CHEST PAINS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="chest_y" name="chest_pains" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="chest_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="chest_n" name="chest_pains" value="No" disabled/>
                    <label className="mr-2" htmlFor="chest_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">KIDNEY/BLADDER STONES</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="kidney_y" name="kidney_bladder" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="kidney_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="kidney_n" name="kidney_bladder" value="No" disabled/>
                    <label className="mr-2" htmlFor="kidney_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">THYROID PROBLEMS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="thyroid_y" name="thyroid_problems" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="thyroid_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="thyroid_n" name="thyroid_problems" value="No" disabled/>
                    <label className="mr-2" htmlFor="thyroid_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">CHICKEN POX</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="chipox_y" name="chicken_pox" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="chipox_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="chipox_n" name="chicken_pox" value="No" disabled/>
                    <label className="mr-2" htmlFor="chipox_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">LOSS OF CONCIOUSNESS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="loss_y" name="loss_conciousness" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="loss_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="loss_n" name="loss_conciousness" value="No" disabled/>
                    <label className="mr-2" htmlFor="loss_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">TONSILLITIS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="tonsil_y" name="tonsillitis" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="tonsil_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="tonsil_n" name="tonsillitis" value="No" disabled/>
                    <label className="mr-2" htmlFor="tonsil_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">DIABETES MELLITUS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="diabm_y" name="diabetes_mellitus" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="diabm_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="diabm_n" name="diabetes_mellitus" value="No" disabled/>
                    <label className="mr-2" htmlFor="diabm_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">MEASLES</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="meas_y" name="measles" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="meas_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="meas_n" name="measles" value="No" disabled/>
                    <label className="mr-2" htmlFor="meas_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">TUBERCULOSIS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="tuber_y" name="tuberculosis" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="tuber_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="tuber_n" name="tuberculosis" value="No" disabled/>
                    <label className="mr-2" htmlFor="tuber_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">EPILEPSY</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="epil_y" name="epilepsy" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="epil_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="epil_n" name="epilepsy" value="No" disabled/>
                    <label className="mr-2" htmlFor="epil_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">MUMPS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="mumps_y" name="mumps" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="mumps_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="mumps_n" name="mumps" value="No" disabled/>
                    <label className="mr-2" htmlFor="mumps_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">UTI</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="uti_y" name="uti" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="uti_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="uti_n" name="uti" value="No" disabled/>
                    <label className="mr-2" htmlFor="uti_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">EYE OR EAR PROBLEM</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="eye_y" name="eye_or_ear" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="eye_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="eye_n" name="eye_or_ear" value="No" disabled/>
                    <label className="mr-2" htmlFor="eye_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">PNEUMONIA</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex cursor-not-allowed" id="pneum_y" name="pneumonia" value="Yes" disabled/>
                    <label className="mr-5" htmlFor="pneum_y">YES</label>
                    <input type="radio" className="inline-flex cursor-not-allowed" id="pneum_n" name="pneumonia" value="No" disabled/>
                    <label className="mr-2" htmlFor="pneum_n">NO</label>
                </div>
            </div>
            {/*end item*/}

            {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">OTHERS</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="text" className="cursor-not-allowed inline-flex border border-black py-1 px-2" readOnly/>
                </div>
                
            </div>
            {/*end item*/}
            </div>
        
        </ul>,
        
    }


    ,{
        question: <p className='font-bold'>FAMILY HISTORY</p>,
        answer: <ul className='flex flex-wrap font-semibold'>
                    <div className="grid grid-cols-2">
                    {/* item */}
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                            <div className="col-span-1">
                                <p className="font-bold mr-2">HIGH BLOOD PRESSURE</p> 
                            </div>
                            <div className="col-span-2">
                                <span className="font-bold mr-2">:</span> 
                                <input type="radio" className="inline-flex cursor-not-allowed" id="HBP_y" name="fam_high_blood_pressure" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="HBP_y">YES</label>
                                <input type="radio" className="inline-flex cursor-not-allowed" id="HBP_n" name="fam_high_blood_pressure" value="No" disabled cursor-not-allowed/>
                                <label className="mr-2" htmlFor="HBP_n">NO</label>
                            </div>
                        </div>
                    {/*end item*/}

                    {/* item */}
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                            <div className="col-span-1">
                                <p className="font-bold mr-2">TUBERCULOSIS</p> 
                            </div>
                            <div className="col-span-2">
                                <span className="font-bold mr-2">:</span> 
                                <input type="radio" className="inline-flex cursor-not-allowed" id="tuberc_y" name="fam_tuberculosis" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="tuberc_y">YES</label>
                                <input type="radio" className="inline-flex cursor-not-allowed" id="tuberc_n" name="fam_tuberculosis" value="No" disabled/>
                                <label className="mr-2" htmlFor="tuberc_n">NO</label>
                            </div>
                        </div>
                    {/*end item*/}

                    {/* item */}
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                            <div className="col-span-1">
                                <p className="font-bold mr-2">HEART DISEASE</p> 
                            </div>
                            <div className="col-span-2">
                                <span className="font-bold mr-2">:</span> 
                                <input type="radio" className="inline-flex cursor-not-allowed" id="HD_y" name="fam_heart_disease" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="HD_y">YES</label>
                                <input type="radio" className="inline-flex cursor-not-allowed" id="HD_n" name="fam_heart_disease" value="No" disabled/>
                                <label className="mr-2" htmlFor="HD_n">NO</label>
                            </div>
                        </div>
                    {/*end item*/}

                    {/* item */}
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                            <div className="col-span-1">
                                <p className="font-bold mr-2">ASTHMA</p> 
                            </div>
                            <div className="col-span-2">
                                <span className="font-bold mr-2">:</span> 
                                <input type="radio" className="inline-flex cursor-not-allowed" id="HD_y" name="fam_asthma" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="HD_y">YES</label>
                                <input type="radio" className="inline-flex cursor-not-allowed" id="HD_n" name="fam_asthma" value="No"  disabled/>
                                <label className="mr-2" htmlFor="HD_n">NO</label>
                            </div>
                        </div>
                    {/*end item*/}

                    {/* item */}
                    <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                        <div className="col-span-1">
                            <p className="font-bold mr-2">DIABETES</p> 
                        </div>
                        <div className="col-span-2">
                            <span className="font-bold mr-2">:</span> 
                            <input type="radio" className="inline-flex cursor-not-allowed" id="diab_y" name="fam_diabetes" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="diab_y">YES</label>
                            <input type="radio" className="inline-flex cursor-not-allowed" id="diab_n" name="fam_diabetes" value="No" disabled/>
                            <label className="mr-2" htmlFor="diab_n">NO</label>
                        </div>
                    </div>
                    {/*end item*/}

                    {/* item */}
                    <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                        <div className="col-span-1">
                            <p className="font-bold mr-2">ALLERGIES</p> 
                        </div>
                        <div className="col-span-2">
                            <span className="font-bold mr-2">:</span> 
                            <input type="radio" className="inline-flex cursor-not-allowed" id="falgry_y" name="fam_allergies" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="falgry_y">YES</label>
                            <input type="radio" className="inline-flex cursor-not-allowed" id="falgry_n" name="fam_allergies" value="No" disabled/>
                            <label className="mr-2" htmlFor="falgry_n">NO</label>
                        </div>
                    </div>
                    {/*end item*/}

                    {/* item */}
                    <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                        <div className="col-span-1">
                            <p className="font-bold mr-2">CANCER</p> 
                        </div>
                        <div className="col-span-2">
                            <span className="font-bold mr-2">:</span> 
                            <input type="radio" className="inline-flex cursor-not-allowed" id="famcan_y" name="fam_cancer" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="famcan_y">YES</label>
                            <input type="radio" className="inline-flex cursor-not-allowed" id="famcan_n" name="fam_cancer" value="No" disabled/>
                            <label className="mr-2" htmlFor="famcan_y">NO</label>
                        </div>
                    </div>
                    {/*end item*/}

                    {/* item */}
                    <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                        <div className="col-span-1">
                            <p className="font-bold mr-2">ANY OTHER HEREDITARY DISEASE</p> 
                        </div>
                        <div className="col-span-2">
                            <span className="font-bold mr-2">:</span> 
                            <input type="text" className="cursor-not-allowed inline-flex border border-black py-1 px-2" readOnly/>
                        </div>   
                    </div>
                    {/*end item*/}
            </div>
    </ul>,
  },


  {
    question: <p className='font-bold'>SOCIAL HISTORY</p>,
    answer: <ul className='font-semibold'>
        <div class="flex flex-col">
            {/* smoke */}
            <div class="flex flex-col md:flex-row py-5">
                <div>
                    <p className="font-bold mr-2">Do you smoke?</p> 
                </div>
                <div>
                    <input type="radio" id="smoke_y" name="smoke" value="Yes" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="smoke_y">YES</label>
                    <input type="radio" id="smoke_n" name="smoke" value="No" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="smoke_n">NO</label>
                </div>
            </div>
            {/* end smoke */}
            <div className="">
                <p className="font-bold mr-2">if yes, how many packs?: (indicate if per days/months)</p>
                <input type="text" id="packs" class="cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
            </div>
            {/* drink */}
            <div className="flex flex-col md:flex-row py-5">
                <div>
                    <p className="font-bold mr-2">Do you drink?</p> 
                </div>
                <div>
                    <input type="radio" id="drink_y" name="drink" value="Yes" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="drink_y">YES</label>
                    <input type="radio" id="drink_n" name="drink" value="No" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="drink_n">NO</label>
                </div>
            </div>
            {/* end drink */}

            {/* how frequent */}
            <div className="flex flex-col md:flex-row py-5">
                <div>
                    <p className="font-bold mr-2 font-bold">If yes, how frequent?</p>
                </div> 
                <div>
                    <input type="radio" id="occasional" name="frequency" value="Normal" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="occasional">OCCASIONAL</label>
                    <input type="radio" id="seldom" name="frequency" value="Abnormal" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="seldom">SELDOM</label>
                </div>
            {/* end of frequency */}
            </div>
            {/* medications */}
            <div className="flex flex-col md:flex-row py-5">
                <div>
                    <p className="font-bold mr-2">Do you take medications at present?</p> 
                </div>
                <div>
                    <input type="radio" id="meds_y" name="meds" value="Yes" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="meds_y">YES</label>
                    <input type="radio" id="med_n" name="meds" value="No" disabled/>
                    <label className="mr-2 font-semibold cursor-not-allowed" htmlFor="med_n">NO</label>
                </div>
            </div>
            {/* end of medication */}
            <div className="">
                <p className="font-bold mr-2">if yes, please indicate:</p>
                <input type="text" id="packs" class="cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
            </div>
        </div>
        {/*end item*/}
  </ul>,
  },




{
  question: <p className='font-bold'>VITAL SIGNS AND OTHERS</p>,
   answer: <ul className='font-semibold'>
            <div class="grid grid-cols-2 space-x-2">
	            <div class="col-span-2 lg:col-span-1">
                    <p className='font-bold underline'>VITAL SIGNS</p>
                        <div>
                            <label for="TEMP" class="block mb-2 text-sm font-medium text-black">TEMPERATURE (C): </label>
                            <input type="number" id="TEMP" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                        </div>
                        <div> 
                            <label for="PULSE" class="block mb-2 text-sm font-medium text-black">PULSE RATE (BPM)</label>
                            <input type="number" id="PULSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                        </div>
                        <div>
                            <label for="REST" class="block mb-2 text-sm font-medium text-black">RESTING RATE (BPM) </label>
                            <input type="number" id="REST" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                        </div>
                        <div>
                            <label for="BLOOD" class="block mb-2 text-sm font-medium text-black">BLOOD PRESSURE (MMHG): </label>
                            <input type="number" id="BLOOD" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                        </div>
                        <div>
                            <label for="WEIGHT" class="block mb-2 text-sm font-medium text-black">WEIGHT (KG): </label>
                            <input type="number" id="WEIGHT" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                        </div>
	            </div>
                    <div class="col-span-2 lg:col-span-1">
                        <p className='font-bold underline'>NURSING INTERVENTIONS</p>
                            <div>
                                <div>
                                    <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                                    <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                                </div>
                            <div>
                                <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                                <input type="text" id="NURSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                            </div>

                                <div>
                                    <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Time: </label>
                                    <input
                                    className="px-2 py-1 border border-gray-300 rounded-md mr-2 text-sm"
                                    type="time"
                                    value={time}
                                    onChange={handleTimeChange}
                                    />
                                </div>
                            </div>
                <div>
                    <div>
                        <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                        <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                    </div>
                    <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                        <input type="text" id="NURSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                    </div>

                    <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Time: </label>
                        <input
                            className="px-2 py-1 border border-gray-300 rounded-md mr-2 text-sm"
                            type="time"
                            value={time2}
                            onChange={handleTimeChange2}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                        <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                    </div>
                    <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                        <input type="text" id="NURSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                    </div>

                    <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Time: </label>
                        <input
                            className="px-2 py-1 border border-gray-300 rounded-md mr-2 text-sm"
                            type="time"
                            value={time3}
                            onChange={handleTimeChange3}
                        />
                    </div>
                </div>
                
            </div>
	    <div nursing interventions/>
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
export default Accordion; 