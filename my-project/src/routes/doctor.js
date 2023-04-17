function Doctor(){
    return(
        <>
    <h1>To be accomplished by physician</h1>
    <div className="grid grid-cols-2">
        {/* item */}
        
        <div className="col-span-2 lg:col-span-1 grid grid-cols-3 items-center mt-4">
            <div className="col-span-1">
                <p className="font-bold mr-2">SKIN</p> 
            </div>
            <div className="col-span-2">
                <span className="font-bold mr-2">:</span> 
                <input type="radio" id="skin_n" name="skin" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="skin_n">NORMAL</label>
                <input type="radio" id="skin_ab" name="skin" value="Abnormal"/>
                <label className="mr-2" htmlFor="skin_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="abdomen_n" name="abdomen" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="abdomen_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="abdomen_ab" name="abdomen" value="Abnormal"/>
                <label className="mr-2" htmlFor="abdomen_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="head_n" name="head_neck_scalp" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="head_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="head_ab" name="head_neck_scalp" value="Abnormal"/>
                <label className="mr-2" htmlFor="head_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="back_n" name="back_flank" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="back_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="back_ab" name="back_flank" value="Abnormal"/>
                <label className="mr-2" htmlFor="back_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="eyes_n" name="eyes" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="eyes_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="eyes_ab" name="eyes" value="Abnormal"/>
                <label className="mr-2" htmlFor="eyes_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="anus_n" name="anus_rectum" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="anus_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="anus_ab" name="anus_rectum" value="Abnormal"/>
                <label className="mr-2" htmlFor="anus_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="nose_n" name="eyes_nose_throat" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="nose_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="nose_ab" name="eyes_nose_throat" value="Abnormal"/>
                <label className="mr-2" htmlFor="nose_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="gu_n" name="gu_system" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="gu_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="gu_ab" name="gu_system" value="Abnormal"/>
                <label className="mr-2" htmlFor="gu_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="sinuses_n" name="nose_sinuses" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="sinuses_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="sinuses_ab" name="nose_sinuses" value="Abnormal"/>
                <label className="mr-2" htmlFor="sinuses_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="inguinal_n" name="inguinal_genitals" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="inguinal_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="inguinal_ab" name="inguinal_genitals" value="Abnormal"/>
                <label className="mr-2" htmlFor="inguinal_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="mouth_n" name="mouth_throat" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="mouth_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="mouth_ab" name="mouth_throat" value="Abnormal"/>
                <label className="mr-2" htmlFor="mouth_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="reflexes_n" name="reflexes" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="reflexes_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="reflexes_ab" name="reflexes" value="Abnormal"/>
                <label className="mr-2" htmlFor="reflexes_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="neck_n" name="neck_ln_thyroid" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="neck_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="neck_ab" name="neck_ln_thyroid" value="Abnormal"/>
                <label className="mr-2" htmlFor="neck_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="extrem_n" name="extremities" value="Normal" defaultdefaultChecked/>
                <label className="mr-2" htmlFor="extrem_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="extrem_ab" name="extremities" value="Abnormal"/>
                <label className="mr-2" htmlFor="extrem_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="chest_n" name="chest_breast_axilla" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="chest_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="chest_ab" name="chest_breast_axilla" value="Abnormal"/>
                <label className="mr-2" htmlFor="chest_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="neu_n" name="neurologic" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="neu_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="neu_ab" name="neurologic" value="Abnormal"/>
                <label className="mr-2" htmlFor="neu_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="lungs_n" name="lungs" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="lungs_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="lungs_ab" name="lungs" value="Abnormal"/>
                <label className="mr-2" htmlFor="lungs_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="endo_n" name="endocrine" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="endo_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="endo_ab" name="endocrine" value="Abnormal"/>
                <label className="mr-2" htmlFor="endo_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="heart_n" name="heart" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="heart_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="heart_ab" name="heart" value="Abnormal"/>
                <label className="mr-2" htmlFor="heart_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
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
                <input type="radio" className="inline-flex" id="others_n" name="others" value="Normal" defaultChecked/>
                <label className="mr-2" htmlFor="others_n">NORMAL</label>
                <input type="radio" className="inline-flex" id="others_ab" name="others" value="Abnormal"/>
                <label className="mr-2" htmlFor="others_ab">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
            </div>
            
        </div>
        {/*end item*/}
    </div>
        </>
    )
}

export default Doctor