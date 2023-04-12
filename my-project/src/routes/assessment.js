function Assessment() {
    return(
        <>
        <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">

            <div class="col-span-2 md:col-span-1 text-center">
                <input type="radio" className="inline-flex" id="radio1" name="fit" value="Physically Fit"/>
                <label className="mr-2" htmlFor="radio1">PHYSICALLY FIT</label>
            </div>

            <div class="col-span-2 md:col-span-1 text-center">
                <input type="radio" className="inline-flex" id="radio2" name="fit" value="Not Physically Fit"/>
                <label className="mr-2" htmlFor="radio2">NOT PHYSICALLY FIT</label>
            </div>

            <div class="col-span-2">
                <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Recommendations"></textarea>
            </div>

            

        </div>
         
        </>
    )
}

export default Assessment