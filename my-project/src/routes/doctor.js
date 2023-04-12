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
                <input type="radio" className="inline-flex" id="radio1" name="skin" value="Normal"  checked/>
                <label className="mr-2" htmlFor="radio1">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio2" name="skin" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio2">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio3" name="abdomen" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio3">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio4" name="abdomen" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio4">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio5" name="head_neck_scalp" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio5">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio6" name="head_neck_scalp" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio6">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio7" name="back_flank" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio7">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio8" name="back_flank" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio8">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio9" name="eyes" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio9">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio10" name="eyes" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio10">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio11" name="anus_rectum" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio11">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio12" name="anus_rectum" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio12">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio13" name="eyes_nose_throat" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio13">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio14" name="eyes_nose_throat" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio14">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio13" name="gu_system" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio13">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio14" name="gu_system" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio14">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio15" name="nose_sinuses" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio15">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio16" name="nose_sinuses" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio16">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio17" name="inguinal_genitals" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio17">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio18" name="inguinal_genitals" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio18">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio19" name="mouth_throat" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio19">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio20" name="mouth_throat" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio20">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio21" name="reflexes" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio21">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio22" name="reflexes" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio22">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio23" name="neck_ln_thyroid" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio23">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio24" name="neck_ln_thyroid" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio24">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio25" name="extremities" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio25">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio26" name="extremities" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio26">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio27" name="chest_breast_axilla" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio27">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio28" name="chest_breast_axilla" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio28">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio28" name="neurologic" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio28">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio29" name="neurologic" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio29">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio30" name="lungs" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio30">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio31" name="lungs" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio31">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio32" name="endocrine" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio32">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio33" name="endocrine" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio33">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio34" name="heart" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio34">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio35" name="heart" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio35">ABNORMAL</label>
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
                <input type="radio" className="inline-flex" id="radio36" name="others" value="Normal" checked/>
                <label className="mr-2" htmlFor="radio36">NORMAL</label>
                <input type="radio" className="inline-flex" id="radio37" name="others" value="Abnormal"/>
                <label className="mr-2" htmlFor="radio37">ABNORMAL</label>
                <input type="text" placeholder="REMARKS" className="inline-flex border border-black py-1 px-2" />
            </div>
            
        </div>
        {/*end item*/}
    </div>
        </>
    )
}

export default Doctor