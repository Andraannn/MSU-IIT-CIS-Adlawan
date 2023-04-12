function PastMedical(){
    return(
        <>
        <div className="grid grid-cols-2">
        {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">ALLERGIES</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex" id="allergies_y" name="allergies" value="Yes"/>
                    <label className="mr-5" htmlFor="allergies_y">YES</label>
                    <input type="radio" className="inline-flex" id="allergies_n" name="allergies" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="gall_y" name="gallbladder" value="Yes"/>
                <label className="mr-5" htmlFor="gall_y">YES</label>
                <input type="radio" className="inline-flex" id="gall_n" name="gallbladder" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="pros_y" name="prostate" value="Yes"/>
                <label className="mr-5" htmlFor="pros_y">YES</label>
                <input type="radio" className="inline-flex" id="pros_n" name="prostate" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="amoeb_y" name="amoebiasis" value="Yes"/>
                <label className="mr-5" htmlFor="amoeb_y">YES</label>
                <input type="radio" className="inline-flex" id="amoeb_n" name="amoebiasis" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="goiter_y" name="goiter" value="Yes"/>
                <label className="mr-5" htmlFor="goiter_y">YES</label>
                <input type="radio" className="inline-flex" id="goiter_n" name="goiter" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="seiz_y" name="seizure" value="Yes"/>
                <label className="mr-5" htmlFor="seiz_y">YES</label>
                <input type="radio" className="inline-flex" id="seiz_n" name="seizure" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="anemia_y" name="anemia" value="Yes"/>
                <label className="mr-5" htmlFor="anemia_y">YES</label>
                <input type="radio" className="inline-flex" id="anemia_n" name="anemia" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="gout_y" name="gout" value="Yes"/>
                <label className="mr-5" htmlFor="gout_y">YES</label>
                <input type="radio" className="inline-flex" id="gout_n" name="gout" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="sinus_y" name="sinusitis_allergic" value="Yes"/>
                <label className="mr-5" htmlFor="sinus_y">YES</label>
                <input type="radio" className="inline-flex" id="sinus_n" name="sinusitis_allergic" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="arth_y" name="arthritis" value="Yes"/>
                <label className="mr-5" htmlFor="arth_y">YES</label>
                <input type="radio" className="inline-flex" id="arth_n" name="arthritis" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="hemor_y" name="hemorroids" value="Yes"/>
                <label className="mr-5" htmlFor="hemor_y">YES</label>
                <input type="radio" className="inline-flex" id="hemor_n" name="hemorroids" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="skin_y" name="skin_disorders" value="Yes"/>
                <label className="mr-5" htmlFor="skin_y">YES</label>
                <input type="radio" className="inline-flex" id="skin_n" name="skin_disorders" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="back_y" name="back_joint_pains" value="Yes"/>
                <label className="mr-5" htmlFor="back_y">YES</label>
                <input type="radio" className="inline-flex" id="back_n" name="back_joint_pains" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="hepa_y" name="hepatitis" value="Yes"/>
                <label className="mr-5" htmlFor="hepa_y">YES</label>
                <input type="radio" className="inline-flex" id="hepa_n" name="hepatitis" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="sti_y" name="sti_hiv" value="Yes"/>
                <label className="mr-5" htmlFor="sti_y">YES</label>
                <input type="radio" className="inline-flex" id="sti_n" name="sti_hiv" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="bone_y" name="bone_fracture" value="Yes"/>
                <label className="mr-5" htmlFor="bone_y">YES</label>
                <input type="radio" className="inline-flex" id="bone_n" name="bone_fracture" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="hypera_y" name="hyperacidity_ulcer" value="Yes"/>
                <label className="mr-5" htmlFor="hypera_y">YES</label>
                <input type="radio" className="inline-flex" id="hypera_n" name="hyperacidity_ulcer" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="stroke_y" name="stroke" value="Yes"/>
                <label className="mr-5" htmlFor="stroke_y">YES</label>
                <input type="radio" className="inline-flex" id="stroke_n" name="stroke" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="breast_y" name="breastmass_lump" value="Yes"/>
                <label className="mr-5" htmlFor="breast_y">YES</label>
                <input type="radio" className="inline-flex" id="breast_n" name="breastmass_lump" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="hypert_y" name="hypertension" value="Yes"/>
                <label className="mr-5" htmlFor="hypert_y">YES</label>
                <input type="radio" className="inline-flex" id="hypert_n" name="hypertension" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="surgery_y" name="surgery_injury" value="Yes"/>
                <label className="mr-5" htmlFor="surgery_y">YES</label>
                <input type="radio" className="inline-flex" id="surgery_n" name="surgery_injury" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="chest_y" name="chest_pains" value="Yes"/>
                <label className="mr-5" htmlFor="chest_y">YES</label>
                <input type="radio" className="inline-flex" id="chest_n" name="chest_pains" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="kidney_y" name="kidney_bladder" value="Yes"/>
                <label className="mr-5" htmlFor="kidney_y">YES</label>
                <input type="radio" className="inline-flex" id="kidney_n" name="kidney_bladder" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="thyroid_y" name="thyroid_problems" value="Yes"/>
                <label className="mr-5" htmlFor="thyroid_y">YES</label>
                <input type="radio" className="inline-flex" id="thyroid_n" name="thyroid_problems" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="chipox_y" name="chicken_pox" value="Yes"/>
                <label className="mr-5" htmlFor="chipox_y">YES</label>
                <input type="radio" className="inline-flex" id="chipox_n" name="chicken_pox" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="loss_y" name="loss_conciousness" value="Yes"/>
                <label className="mr-5" htmlFor="loss_y">YES</label>
                <input type="radio" className="inline-flex" id="loss_n" name="loss_conciousness" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="tonsil_y" name="tonsillitis" value="Yes"/>
                <label className="mr-5" htmlFor="tonsil_y">YES</label>
                <input type="radio" className="inline-flex" id="tonsil_n" name="tonsillitis" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="diabm_y" name="diabetes_mellitus" value="Yes"/>
                <label className="mr-5" htmlFor="diabm_y">YES</label>
                <input type="radio" className="inline-flex" id="diabm_n" name="diabetes_mellitus" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="meas_y" name="measles" value="Yes"/>
                <label className="mr-5" htmlFor="meas_y">YES</label>
                <input type="radio" className="inline-flex" id="meas_n" name="measles" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="tuber_y" name="tuberculosis" value="Yes"/>
                <label className="mr-5" htmlFor="tuber_y">YES</label>
                <input type="radio" className="inline-flex" id="tuber_n" name="tuberculosis" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="epil_y" name="epilepsy" value="Yes"/>
                <label className="mr-5" htmlFor="epil_y">YES</label>
                <input type="radio" className="inline-flex" id="epil_n" name="epilepsy" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="mumps_y" name="mumps" value="Yes"/>
                <label className="mr-5" htmlFor="mumps_y">YES</label>
                <input type="radio" className="inline-flex" id="mumps_n" name="mumps" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="uti_y" name="uti" value="Yes"/>
                <label className="mr-5" htmlFor="uti_y">YES</label>
                <input type="radio" className="inline-flex" id="uti_n" name="uti" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="eye_y" name="eye_or_ear" value="Yes"/>
                <label className="mr-5" htmlFor="eye_y">YES</label>
                <input type="radio" className="inline-flex" id="eye_n" name="eye_or_ear" value="No" checked/>
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
                <input type="radio" className="inline-flex" id="pneum_y" name="pneumonia" value="Yes"/>
                <label className="mr-5" htmlFor="pneum_y">YES</label>
                <input type="radio" className="inline-flex" id="pneum_n" name="pneumonia" value="No" checked/>
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
                <input type="text" className="inline-flex border border-black py-1 px-2" />
            </div>
            
        </div>
        {/*end item*/}
        </div>
        </>
    )
}

export default PastMedical