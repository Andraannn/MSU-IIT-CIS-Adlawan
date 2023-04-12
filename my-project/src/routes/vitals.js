import React, {useState} from "react";
function Vitals(){
    const [time, setTime] = useState("");
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };
    return(
        <>
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
                            value={time}
                            onChange={handleTimeChange}
                        />
                    </div>
                </div>
                
            </div>
	    <div nursing interventions/>
        </div>
        </>
    )
}

export default Vitals