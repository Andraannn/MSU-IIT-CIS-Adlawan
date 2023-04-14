import React, {useState} from "react";

function Testing() {
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
  return(
  <>
  <div className="grid grid-cols-2 gap-x-12">
      <div class="col-span-2 lg:col-span-1">
          <div className="font-bold">CHIEF COMPLAINT:
              <div className="col-span-2 lg:col-span-1">
                  <input type="text" id="ch_complaint" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
              </div>  
          </div>
              <div className="font-bold">VITAL SIGNS:
                  <div>
                      <label for="TEMP" class="block mb-2 text-sm font-medium font-semibold text-black">TEMPERATURE (C): </label>
                      <input type="number" id="TEMP" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                  </div>
                  <div> 
                      <label for="PULSE" class="block mb-2 text-sm font-medium font-semibold text-black">PULSE RATE (BPM)</label>
                      <input type="number" id="PULSE" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                  </div>
                  <div>
                      <label for="REST" class="block mb-2 text-sm font-medium font-semibold text-black">RESTING RATE (BPM) </label>
                      <input type="number" id="REST" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                  </div>
                  <div>
                      <label for="BLOOD" class="block mb-2 text-sm font-medium font-semibold text-black">BLOOD PRESSURE (MMHG): </label>
                      <input type="number" id="BLOOD" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                  </div>
                  <div>
                      <label for="WEIGHT" class="block mb-2 text-sm font-medium font-semibold text-black">WEIGHT (KG): </label>
                      <input type="number" id="WEIGHT" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                  </div>
                  </div>
                    <div className="font-bold">HISTORY OF PRESENT ILLNESS:
                        <input type="text" id="histo_ill" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
              </div>
      </div>
          <div class="col-span-2 lg:col-span-1">
              <div className="font-bold">NURSING INTERVENTIONS:
                  <div className="col-span-3 lg:col-span-1">
                      <div>
                          <div>
                              <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                              <input type="text" id="MED" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                          </div>

                          <div>
                              <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                              <input type="text" id="NURSE" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                          </div>

                          <div>
                              <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Time: </label>
                              <input
                              className="px-2 py-1 border border-black rounded-md mr-2 text-sm"
                              type="time"
                              value={time}
                              onChange={handleTimeChange}
                              />
                          </div>
                      </div>

                      <div>
                          <div>
                              <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                              <input type="text" id="MED" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                          </div>

                          <div>
                              <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                              <input type="text" id="NURSE" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                          </div>

                          <div>
                              <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Time: </label>
                              <input
                              className="px-2 py-1 border border-black rounded-md mr-2 text-sm"
                              type="time"
                              value={time2}
                              onChange={handleTimeChange2}
                              />
                          </div>
                      </div>

                      <div>
                          <div>
                              <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                              <input type="text" id="MED" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                          </div>

                          <div>
                              <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                              <input type="text" id="NURSE" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                          </div>
                              <div>
                                  <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Time: </label>
                                  <input
                                  className="px-2 py-1 border border-black rounded-md mr-2 text-sm"
                                  type="time"
                                  value={time3}
                                  onChange={handleTimeChange3}
                                  />
                              </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="col-span-2 lg:mr-20 lg:ml-20">
                <div className="font-bold">DIAGNOSIS:
                <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Enter diagnosis"></textarea>
                </div>

                <div className="font-bold">FINDINGS:
                <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Enter findings"></textarea>
                </div>

                <div className="font-bold">RECOMMENDATIONS:
                <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Enter recommendations"></textarea>
                </div>
            </div>
        </div>
    </>
    )
}

export default Testing