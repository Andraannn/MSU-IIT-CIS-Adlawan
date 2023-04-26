import  React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function NewAccordion() {
  const [showModal, setShowModal] = useState('');
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


const renderSwitch = (param) => {
    switch(param) {
      case 'pastmedicalhistory':
        return (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full my-auto mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                        <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">PAST MEDICAL HISTORY</h3>
                        </div>
                    {/*body*/}
                    <div className="p-6 grid grid-cols-2">
                    {/* item */}
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                            <div className="col-span-1">
                                <p className="font-bold mr-2">ALLERGIES</p> 
                            </div>
                            <div className="col-span-2">
                                <span className="font-bold mr-2">:</span> 
                                <input type="radio" className="inline-flex " id="allergies_y" name="allergies" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="allergies_y">YES</label>
                                <input type="radio" className="inline-flex " id="allergies_n" name="allergies" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="gall_y" name="gallbladder" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="gall_y">YES</label>
                            <input type="radio" className="inline-flex " id="gall_n" name="gallbladder" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="pros_y" name="prostate" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="pros_y">YES</label>
                            <input type="radio" className="inline-flex " id="pros_n" name="prostate" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="amoeb_y" name="amoebiasis" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="amoeb_y">YES</label>
                            <input type="radio" className="inline-flex " id="amoeb_n" name="amoebiasis" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="goiter_y" name="goiter" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="goiter_y">YES</label>
                            <input type="radio" className="inline-flex " id="goiter_n" name="goiter" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="seiz_y" name="seizure" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="seiz_y">YES</label>
                            <input type="radio" className="inline-flex " id="seiz_n" name="seizure" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="anemia_y" name="anemia" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="anemia_y">YES</label>
                            <input type="radio" className="inline-flex " id="anemia_n" name="anemia" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="gout_y" name="gout" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="gout_y">YES</label>
                            <input type="radio" className="inline-flex " id="gout_n" name="gout" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="sinus_y" name="sinusitis_allergic" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="sinus_y">YES</label>
                            <input type="radio" className="inline-flex " id="sinus_n" name="sinusitis_allergic" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="arth_y" name="arthritis" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="arth_y">YES</label>
                            <input type="radio" className="inline-flex " id="arth_n" name="arthritis" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="hemor_y" name="hemorroids" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="hemor_y">YES</label>
                            <input type="radio" className="inline-flex " id="hemor_n" name="hemorroids" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="skin_y" name="skin_disorders" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="skin_y">YES</label>
                            <input type="radio" className="inline-flex " id="skin_n" name="skin_disorders" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="back_y" name="back_joint_pains" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="back_y">YES</label>
                            <input type="radio" className="inline-flex " id="back_n" name="back_joint_pains" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="hepa_y" name="hepatitis" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="hepa_y">YES</label>
                            <input type="radio" className="inline-flex " id="hepa_n" name="hepatitis" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="sti_y" name="sti_hiv" value="Yes"disabled/>
                            <label className="mr-5" htmlFor="sti_y">YES</label>
                            <input type="radio" className="inline-flex " id="sti_n" name="sti_hiv" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="bone_y" name="bone_fracture" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="bone_y">YES</label>
                            <input type="radio" className="inline-flex " id="bone_n" name="bone_fracture" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="hypera_y" name="hyperacidity_ulcer" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="hypera_y">YES</label>
                            <input type="radio" className="inline-flex " id="hypera_n" name="hyperacidity_ulcer" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="stroke_y" name="stroke" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="stroke_y">YES</label>
                            <input type="radio" className="inline-flex " id="stroke_n" name="stroke" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="breast_y" name="breastmass_lump" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="breast_y">YES</label>
                            <input type="radio" className="inline-flex " id="breast_n" name="breastmass_lump" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="hypert_y" name="hypertension" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="hypert_y">YES</label>
                            <input type="radio" className="inline-flex " id="hypert_n" name="hypertension" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="surgery_y" name="surgery_injury" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="surgery_y">YES</label>
                            <input type="radio" className="inline-flex " id="surgery_n" name="surgery_injury" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="chest_y" name="chest_pains" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="chest_y">YES</label>
                            <input type="radio" className="inline-flex " id="chest_n" name="chest_pains" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="kidney_y" name="kidney_bladder" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="kidney_y">YES</label>
                            <input type="radio" className="inline-flex " id="kidney_n" name="kidney_bladder" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="thyroid_y" name="thyroid_problems" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="thyroid_y">YES</label>
                            <input type="radio" className="inline-flex " id="thyroid_n" name="thyroid_problems" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="chipox_y" name="chicken_pox" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="chipox_y">YES</label>
                            <input type="radio" className="inline-flex " id="chipox_n" name="chicken_pox" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="loss_y" name="loss_conciousness" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="loss_y">YES</label>
                            <input type="radio" className="inline-flex " id="loss_n" name="loss_conciousness" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="tonsil_y" name="tonsillitis" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="tonsil_y">YES</label>
                            <input type="radio" className="inline-flex " id="tonsil_n" name="tonsillitis" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="diabm_y" name="diabetes_mellitus" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="diabm_y">YES</label>
                            <input type="radio" className="inline-flex " id="diabm_n" name="diabetes_mellitus" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="meas_y" name="measles" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="meas_y">YES</label>
                            <input type="radio" className="inline-flex " id="meas_n" name="measles" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="tuber_y" name="tuberculosis" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="tuber_y">YES</label>
                            <input type="radio" className="inline-flex " id="tuber_n" name="tuberculosis" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="epil_y" name="epilepsy" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="epil_y">YES</label>
                            <input type="radio" className="inline-flex " id="epil_n" name="epilepsy" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="mumps_y" name="mumps" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="mumps_y">YES</label>
                            <input type="radio" className="inline-flex " id="mumps_n" name="mumps" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="uti_y" name="uti" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="uti_y">YES</label>
                            <input type="radio" className="inline-flex " id="uti_n" name="uti" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="eye_y" name="eye_or_ear" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="eye_y">YES</label>
                            <input type="radio" className="inline-flex " id="eye_n" name="eye_or_ear" value="No" disabled/>
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
                            <input type="radio" className="inline-flex " id="pneum_y" name="pneumonia" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="pneum_y">YES</label>
                            <input type="radio" className="inline-flex " id="pneum_n" name="pneumonia" value="No" disabled/>
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
                            <input type="text" className=" inline-flex border border-black py-1 px-2" readOnly/>
                        </div>
                        
                    </div>
                    {/*end item*/}
                    </div>
                    {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                            CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
                    )
        case 'familyhistory':
            return (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full my-6 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                        <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">FAMILY HISTORY</h3>
                        </div>
                    {/*body*/}
                        <div className="p-6 grid grid-cols-2">
                        {/* item */}
                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                            <div className="col-span-1">
                                <p className="font-bold mr-2">HIGH BLOOD PRESSURE</p> 
                            </div>
                            <div className="col-span-2">
                                <span className="font-bold mr-2">:</span> 
                                <input type="radio" className="inline-flex " id="HBP_y" name="fam_high_blood_pressure" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="HBP_y">YES</label>
                                <input type="radio" className="inline-flex " id="HBP_n" name="fam_high_blood_pressure" value="No" disabled />
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
                                <input type="radio" className="inline-flex " id="tuberc_y" name="fam_tuberculosis" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="tuberc_y">YES</label>
                                <input type="radio" className="inline-flex " id="tuberc_n" name="fam_tuberculosis" value="No" disabled/>
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
                                <input type="radio" className="inline-flex " id="HD_y" name="fam_heart_disease" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="HD_y">YES</label>
                                <input type="radio" className="inline-flex " id="HD_n" name="fam_heart_disease" value="No" disabled/>
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
                                <input type="radio" className="inline-flex " id="HD_y" name="fam_asthma" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="HD_y">YES</label>
                                <input type="radio" className="inline-flex " id="HD_n" name="fam_asthma" value="No"  disabled/>
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
                            <input type="radio" className="inline-flex " id="diab_y" name="fam_diabetes" value="Yes" disabled/>
                            <label className="mr-5" htmlFor="diab_y">YES</label>
                            <input type="radio" className="inline-flex " id="diab_n" name="fam_diabetes" value="No" disabled/>
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
                                <input type="radio" className="inline-flex " id="falgry_y" name="fam_allergies" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="falgry_y">YES</label>
                                <input type="radio" className="inline-flex " id="falgry_n" name="fam_allergies" value="No" disabled/>
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
                                <input type="radio" className="inline-flex " id="famcan_y" name="fam_cancer" value="Yes" disabled/>
                                <label className="mr-5" htmlFor="famcan_y">YES</label>
                                <input type="radio" className="inline-flex " id="famcan_n" name="fam_cancer" value="No" disabled/>
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
                                <input type="text" className=" inline-flex border border-black py-1 px-2" readOnly/>
                            </div>   
                        </div>
                        {/*end item*/}
                    </div>
                    {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                            CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        )
        case 'socialhistory':
            return (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-full my-6 mx-auto max-w-6xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                            <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">SOCIAL HISTORY</h3>
                            </div>
                        {/*body*/}
                        <div class="p-6 flex flex-col">
                            {/* smoke */}
                            <div class="flex flex-col md:flex-row py-5">
                                <div>
                                    <p className="font-bold mr-2">Do you smoke?</p> 
                                </div>
                                <div>
                                    <input type="radio" id="smoke_y" name="smoke" value="Yes" disabled/>
                                    <label className="mr-2 font-semibold" htmlFor="smoke_y">YES</label>
                                    <input type="radio" id="smoke_n" name="smoke" value="No" disabled/>
                                    <label className="mr-2 font-semibold" htmlFor="smoke_n">NO</label>
                                </div>
                            </div>
                            {/* end smoke */}
                            <div className="">
                                <p className="font-bold mr-2">if yes, how many packs?: (indicate if per days/months)</p>
                                <input type="text" id="packs" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                            </div>
                            {/* drink */}
                            <div className="flex flex-col md:flex-row py-5">
                                <div>
                                    <p className="font-bold mr-2">Do you drink?</p> 
                                </div>
                                <div>
                                    <input type="radio" id="drink_y" name="drink" value="Yes" disabled/>
                                    <label className="mr-2 font-semibold" htmlFor="drink_y">YES</label>
                                    <input type="radio" id="drink_n" name="drink" value="No" disabled/>
                                    <label className="mr-2 font-semibold" htmlFor="drink_n">NO</label>
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
                                    <label className="mr-2 font-semibold" htmlFor="occasional">OCCASIONAL</label>
                                    <input type="radio" id="seldom" name="frequency" value="Abnormal" disabled/>
                                    <label className="mr-2 font-semibold" htmlFor="seldom">SELDOM</label>
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
                                    <label className="mr-2 font-semibold" htmlFor="meds_y">YES</label>
                                    <input type="radio" id="med_n" name="meds" value="No" disabled/>
                                    <label className="mr-2 font-semibold" htmlFor="med_n">NO</label>
                                </div>
                            </div>
                            {/* end of medication */}
                            <div className="">
                                <p className="font-bold mr-2">if yes, please indicate:</p>
                                <input type="text" id="packs" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                            </div>
                        </div>
                        {/*end item*/}
                        {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
        case 'vitalsigns':
            return(
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full h-auto my-auto mx-auto max-w-7xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                        <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">VITAL SIGNS AND OTHERS</h3>
                        </div>
                    {/*body*/}
                    <div class="p-6 grid grid-cols-2 space-x-2">
	            <div class="col-span-2 lg:col-span-1">
                    <p className='font-bold underline'>VITAL SIGNS</p>
                        <div>
                            <label for="TEMP" class="block mb-2 text-sm font-medium text-black">TEMPERATURE (C): </label>
                            <input type="number" id="TEMP" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                        </div>
                        <div> 
                            <label for="PULSE" class="block mb-2 text-sm font-medium text-black">PULSE RATE (BPM)</label>
                            <input type="number" id="PULSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                        </div>
                        <div>
                            <label for="REST" class="block mb-2 text-sm font-medium text-black">RESTING RATE (BPM) </label>
                            <input type="number" id="REST" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                        </div>
                        <div>
                            <label for="BLOOD" class="block mb-2 text-sm font-medium text-black">BLOOD PRESSURE (MMHG): </label>
                            <input type="number" id="BLOOD" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                        </div>
                        <div>
                            <label for="WEIGHT" class="block mb-2 text-sm font-medium text-black">WEIGHT (KG): </label>
                            <input type="number" id="WEIGHT" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                        </div>
	            </div>
                    <div class="col-span-2 lg:col-span-1">
                        <p className='font-bold underline'>NURSING INTERVENTIONS</p>
                            <div>
                                <div>
                                    <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                                    <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
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
                        <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                    </div>
                    <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                        <input type="text" id="NURSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' readOnly/>
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
                        <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " readOnly/>
                    </div>
                    <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                        <input type="text" id="NURSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' readOnly/>
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
                    {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                            CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
        case 'physicalexam':
            return(
            <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-full my-auto mx-auto max-w-6xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                    <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">PHYSICAL EXAMINATION</h3>
                                    </div>
                                {/*body*/}
                                <h1 className='px-6 py-5'>To be accomplished by physician</h1>
                                    <div className="p-6 grid grid-cols-2">
                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">SKIN</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" id="skin_n" name="skin" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="skin_n">NORMAL</label>
                                                <input type="radio" id="skin_ab" name="skin" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="skin_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">ABDOMEN</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="abdomen_n" name="abdomen" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="abdomen_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="abdomen_ab" name="abdomen" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="abdomen_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">HEAD, NECK, SCALP</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="head_n" name="head_neck_scalp" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="head_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="head_ab" name="head_neck_scalp" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="head_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">BACK, FLANK</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span>
                                                <input type="radio" className="inline-flex" id="back_n" name="back_flank" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="back_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="back_ab" name="back_flank" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="back_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">EYES</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="eyes_n" name="eyes" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="eyes_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="eyes_ab" name="eyes" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="eyes_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">ANUS, RECTUM</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="anus_n" name="anus_rectum" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="anus_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="anus_ab" name="anus_rectum" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="anus_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">EYES/NOSE/THROAT</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="nose_n" name="eyes_nose_throat" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="nose_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="nose_ab" name="eyes_nose_throat" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="nose_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">GU SYSTEM</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="gu_n" name="gu_system" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="gu_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="gu_ab" name="gu_system" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="gu_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">NOSE, SINUSES</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="sinuses_n" name="nose_sinuses" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="sinuses_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="sinuses_ab" name="nose_sinuses" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="sinuses_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">INGUINAL, GENITALS</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="inguinal_n" name="inguinal_genitals" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="inguinal_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="inguinal_ab" name="inguinal_genitals" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="inguinal_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">MOUTH, THROAT</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="mouth_n" name="mouth_throat" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="mouth_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="mouth_ab" name="mouth_throat" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="mouth_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">REFLEXES</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="reflexes_n" name="reflexes" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="reflexes_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="reflexes_ab" name="reflexes" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="reflexes_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">NECK, LN, THYROID</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="neck_n" name="neck_ln_thyroid" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="neck_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="neck_ab" name="neck_ln_thyroid" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="neck_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">EXTREMITIES</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="extrem_n" name="extremities" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="extrem_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="extrem_ab" name="extremities" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="extrem_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">CHEST-BREAST-AXILLA</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="chest_n" name="chest_breast_axilla" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="chest_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="chest_ab" name="chest_breast_axilla" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="chest_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">NEUROLOGIC</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="neu_n" name="neurologic" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="neu_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="neu_ab" name="neurologic" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="neu_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">LUNGS</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="lungs_n" name="lungs" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="lungs_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="lungs_ab" name="lungs" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="lungs_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">ENDOCRINE</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="endo_n" name="endocrine" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="endo_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="endo_ab" name="endocrine" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="endo_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}

                                        {/* item */}
                                        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
                                            <div className="col-span-1">
                                                <p className="font-bold mr-2">HEART</p> 
                                            </div>
                                            <div className="col-span-2">
                                                <span className="font-bold mr-2">:</span> 
                                                <input type="radio" className="inline-flex" id="heart_n" name="heart" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="heart_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="heart_ab" name="heart" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="heart_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
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
                                                <input type="radio" className="inline-flex" id="others_n" name="others" value="Normal" disabled/>
                                                <label className="mr-2" htmlFor="others_n">NORMAL</label>
                                                <input type="radio" className="inline-flex" id="others_ab" name="others" value="Abnormal" disabled/>
                                                <label className="mr-2" htmlFor="others_ab">ABNORMAL</label>
                                                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" readOnly/>
                                            </div>
                                            
                                        </div>
                                        {/*end item*/}
                                    </div>
                                        {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                CLOSE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )

        case 'assessment':
            return(
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full my-auto mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                        <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">ASSESSMENT AND RECOMMENDATIONS</h3>
                        </div>
                    {/*body*/}
                    <div class="p-6 grid grid-cols-2 gap-4 max-w-xl m-auto">
                        <div class="col-span-2 md:col-span-1 text-center">
                            <input type="radio" className="inline-flex" id="radio1" name="fit" value="Physically Fit" disabled/>
                            <label className="mr-2" htmlFor="radio1">PHYSICALLY FIT</label>
                        </div>

                    <div class="col-span-2 md:col-span-1 text-center">
                        <input type="radio" className="inline-flex" id="radio2" name="fit" value="Not Physically Fit" disabled/>
                        <label className="mr-2" htmlFor="radio2">NOT PHYSICALLY FIT</label>
                    </div>

                    <div class="col-span-2">
                        <textarea readOnly cols="20" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Recommendations"></textarea>
                    </div>

                    </div>   
                    {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                            CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
        case 'checkup':
            return (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-full my-auto mx-auto max-w-6xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                            <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">CHECK UP</h3>
                            </div>
                        {/*body*/}

                        {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="bg-stone-600 text-white active:bg-stone-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
    }
  }

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
                                    <input id="per_stud" type="radio" name="Patient" value="Student" class="flex items-center mr-4 w-4 h-4" disabled/>
                                    <label for="per_stud" class="block mr-4 text-sm font-medium text-black"> Student</label>
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-row">
                                    <input id="per_pat" type="radio" name="Patient" value="Faculty" class="flex items-center mr-4 w-4 h-4" disabled/>
                                    <label for="per_pat" class="block mr-4 text-sm font-medium text-black"> Faculty</label>
                                </div>
                            </div>
                            <div>
                                <div class="flex flex-row">
                                    <input id="per_staff" type="radio" name="Patient" value="Staff" class="flex items-center mr-4 w-4 h-4" disabled/>
                                    <label for="per_staff" class="block mr-4 text-sm font-medium text-black"> Staff</label>
                                </div>
                            </div>
                        </div>
                </div> 

			    <div className="font-bold text-center">ID NUMBER:
                    <div className="col-span-3 lg:col-span-1">
                        <input type="text" id="id_num" class="border border-black text-black text-sm rounded-lg block w-full p-2" readOnly/>
                    </div>  
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-x-12"> 
            {/* patient input */}
            
            {/* end patient input */}
	        <div class="col-span-3 lg:col-span-1">
		        <div className="cursor-default font-bold">PHOTO:
                    <div className="col-span-3 lg:col-span-1">
                        <img
                        src="https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                        class="h-44 max-w-md mx-auto rounded border p-0 dark:border-neutral-700 dark:bg-neutral-800"
                        alt="..." />                 
                    </div>
                </div>
          
			    <div className="font-bold">FULL NAME:</div>
                    <div>
                        <input type="text" id="full_name" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
		    </div>
		  
		          
            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">COLLEGE/DEPT.:
                    <div>
                        <input type="text" id="colldept" class="border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div> 
                <div className="font-bold">DATE OF BIRTH:
                    <div>
                        <input type="text" id="bdate" class="border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">AGE:
                    <div>
                        <input type="text" id="age" class="border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">SEX:
                    <div>
                        <input type="text" id="sex" class="border border-black text-gray-900 text-sm rounded-lg block w-80 p-2.5" readOnly/>
                    </div>
                </div>
            </div>

            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">CIVIL STATUS:
                    <div>
                        <input type="text" id="civil" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div> 
                <div className="font-bold">HOME ADDRESS:
                    <div>
                        <input type="text" id="h_add" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">PRESENT ADDRESS:
                    <div>
                        <input type="text" id="pres_add" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div>
                <div className="font-bold">MOBILE NUMBER:
                    <div>
                        <input type="text" id="mob_num" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" readOnly/>
                    </div>
                </div>
		    </div>
        </div>
    </ul>,
  },

  {
    question: <p className='font-bold'>MEDICAL RECORD</p>,
    answer: <ul className='font-semibold my-5'>
                <div class="py-3 relative overflow-x-auto shadow-md sm:rounded-lg">        
                    <div class="pb-4 pt-5 px-2 bg-white dark:bg-gray-900">
                        <label for="table-search" class="sr-only">Search</label>
                            <div class="relative mt-2">
                                <div class="absolute inset-y-1 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                    <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for user"/>
                            </div>
                    </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                USERNAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ROLE
                            </th>
                            <th scope="col" class="px-10 py-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4">
                                1
                            </th>
                            <td class="px-6 py-4">
                                andreigabrielle.adlawan
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                DOCTOR
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="px-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4">
                                2
                            </th>
                            <td class="px-6 py-4">
                                cyrus.conde
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ADMIN
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="px-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" class="px-6 py-4">
                                3
                            </th>
                            <td class="px-6 py-4">
                                phoenix.dotarot
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                NURSE
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" class="px-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal('pastmedicalhistory')}>PAST MEDICAL HISTORY</button>
                    <button class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal('familyhistory')}>FAMILY HISTORY</button>
                    <button class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal('socialhistory')}>SOCIAL HISTORY</button>
                    <button class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal('vitalsigns')}>VITAL SIGNS AND OTHERS</button>
                    <button class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal('physicalexam')}>PHYSICAL EXAMINATION</button>
                    <button class="bg-stone-500 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal('assessment')}>ASSESSMENT AND RECOMMENDATIONS</button>
                </div>

                <div class="my-10">
                    <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded" onClick={() => setShowModal('checkup')}>CHECK UP</button>
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
      {renderSwitch(showModal)}
      
    </div>
    )
  }
export default NewAccordion; 