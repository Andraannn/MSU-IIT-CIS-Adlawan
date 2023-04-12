function Social(){
    return (
        <>
        <div class="flex flex-col">
             {/* smoke */}
            <div class="flex flex-col md:flex-row py-5">
                <div>
                    <p className="font-bold mr-2">Do you smoke?</p> 
                </div>
                <div>
                    <input type="radio" id="smoke_y" name="smoke" value="Yes" checked/>
                    <label className="mr-2 font-semibold" htmlFor="smoke_y">YES</label>
                    <input type="radio" id="smoke_n" name="smoke" value="No"/>
                    <label className="mr-2 font-semibold" htmlFor="smoke_n">NO</label>
                </div>
            </div>
             {/* end smoke */}
            <div className="">
                <p className="font-bold mr-2">if yes, how many packs?: (indicate if per days/months)</p>
                <input type="text" id="packs" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  "/>
            </div>
             {/* drink */}
            <div className="flex flex-col md:flex-row py-5">
                <div>
                    <p className="font-bold mr-2">Do you drink?</p> 
                </div>
                <div>
                    <input type="radio" id="drink_y" name="drink" value="Yes" checked/>
                    <label className="mr-2 font-semibold" htmlFor="drink_y">YES</label>
                    <input type="radio" id="drink_n" name="drink" value="No"/>
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
                    <input type="radio" id="occasional" name="frequency" value="Normal" checked/>
                    <label className="mr-2 font-semibold" htmlFor="occasional">OCCASIONAL</label>
                    <input type="radio" id="seldom" name="frequency" value="Abnormal"/>
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
                    <input type="radio" id="meds_y" name="meds" value="Yes" checked/>
                    <label className="mr-2 font-semibold" htmlFor="meds_y">YES</label>
                    <input type="radio" id="med_n" name="meds" value="No"/>
                    <label className="mr-2 font-semibold" htmlFor="med_n">NO</label>
                </div>
            </div>
             {/* end of medication */}
            <div className="">
                <p className="font-bold mr-2">if yes, please indicate:</p>
                <input type="text" id="packs" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  "/>
            </div>
        </div>
        
        {/*end item*/}
        </>
    )
}

export default Social