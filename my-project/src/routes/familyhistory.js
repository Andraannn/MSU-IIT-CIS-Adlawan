function FamilyHistory(){
    return(
        <>
    <div className="grid grid-cols-2">
    {/* item */}
            <div className="col-span-2 lg:col-span-1 grid grid-cols-3 mt-4">
                <div className="col-span-1">
                    <p className="font-bold mr-2">HIGH BLOOD PRESSURE</p> 
                </div>
                <div className="col-span-2">
                    <span className="font-bold mr-2">:</span> 
                    <input type="radio" className="inline-flex" id="HBP_y" name="fam_high_blood_pressure" value="Yes"/>
                    <label className="mr-5" htmlFor="HBP_y">YES</label>
                    <input type="radio" className="inline-flex" id="HBP_n" name="fam_high_blood_pressure" value="No" checked/>
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
                    <input type="radio" className="inline-flex" id="tuberc_y" name="fam_tuberculosis" value="Yes"/>
                    <label className="mr-5" htmlFor="tuberc_y">YES</label>
                    <input type="radio" className="inline-flex" id="tuberc_n" name="fam_tuberculosis" value="No" checked/>
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
                    <input type="radio" className="inline-flex" id="HD_y" name="fam_heart_disease" value="Yes"/>
                    <label className="mr-5" htmlFor="HD_y">YES</label>
                    <input type="radio" className="inline-flex" id="HD_n" name="fam_heart_disease" value="No" checked/>
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
                    <input type="radio" className="inline-flex" id="HD_y" name="fam_asthma" value="Yes"/>
                    <label className="mr-5" htmlFor="HD_y">YES</label>
                    <input type="radio" className="inline-flex" id="HD_n" name="fam_asthma" value="No" checked/>
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
                    <input type="radio" className="inline-flex" id="diab_y" name="fam_diabetes" value="Yes"/>
                    <label className="mr-5" htmlFor="diab_y">YES</label>
                    <input type="radio" className="inline-flex" id="diab_n" name="fam_diabetes" value="No" checked/>
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
                    <input type="radio" className="inline-flex" id="falgry_y" name="fam_allergies" value="Yes"/>
                    <label className="mr-5" htmlFor="falgry_y">YES</label>
                    <input type="radio" className="inline-flex" id="falgry_n" name="fam_allergies" value="No" checked/>
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
                    <input type="radio" className="inline-flex" id="famcan_y" name="fam_cancer" value="Yes"/>
                    <label className="mr-5" htmlFor="famcan_y">YES</label>
                    <input type="radio" className="inline-flex" id="famcan_n" name="fam_cancer" value="No" checked/>
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
                <input type="text" className="inline-flex border border-black py-1 px-2" />
            </div>
            
        </div>
        {/*end item*/}
    </div>
        </>
    )
}

export default FamilyHistory