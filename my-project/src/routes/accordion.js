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
    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

const data = [
  {
    question: <p className='font-bold'>PERSONAL INFORMATION</p>,
    answer: <ul className='flex flex-wrap font-semibold'>
      <li className='w-1/3 p-4 border-r border-black'>
      <label for="country-option-1" class="block ml-2 text-sm font-medium text-black ">Patient Type: </label>

          <div class="flex items-center mb-4 space-x-4">
              
              <input id="country-option-1" type="radio" name="Patient" value="Student" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="country-option-1" class="block ml-2 text-sm font-medium text-black"> Student</label>

              <input id="country-option-2" type="radio" name="Patient" value="Faculty" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="country-option-2" class="block ml-2 text-sm font-medium text-black"> Faculty</label>

              <input id="country-option-3" type="radio" name="Patient" value="Staff" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="country-option-3" class="block ml-2 text-sm font-medium text-black"> Staff</label>

          </div>
      </li>

     
 <li className='w-1/3 p-4 border-r text-black border-black '>
          <label for="civil">College: </label>
          <form action="/action_page.php">
                    <select name="civil" id="civil">
                        <option value="singol">CCS </option>
                        <option value="mared">CSM</option>
                        <option value="bulag">CASS</option>
                        <option value="seperet">COET</option>
                        <option value="wedow">CEBA</option>
                        <option value="wedow">CED</option>
                        <option value="wedow">CHS</option>
                    </select>
            </form>
      </li>

      <li className='w-1/3 p-4 '>
          <div>
          <label for="others" class="block mb-2 text-sm font-medium text-black">ID NUMBER: </label>
           <input type="number" id="first_name" class="border border-gray-300 w-48 text-black rounded-lg  p-.5" required/>
        </div>  
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
          <div>
             <label for="last_name" class="block mb-2 text-sm font-medium text-black">First name: </label>
              <input type="text" id="last_name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
           </div>
      </li>
      <li className='w-1/3 p-4 border-r border-black'>
          <div>
            <label for="company" class="block mb-2 text-sm font-medium text-black">Middle name: </label>
            <input type="text" id="company" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  required/>
         </div> 
      </li>

      <li className='w-1/3 p-4 '>
         <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-black">Last name: </label>
            <input type="text" id="first_name" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black text-black'>
          <label for="civil ">Civil Status: </label>
          <form action="/action_page.php">
                  <select name="civil" id="civil">
                      <option value="singol">Single </option>
                      <option value="mared">Married</option>
                      <option value="bulag">Divorced</option>
                      <option value="seperet">Separated</option>
                      <option value="wedow">Widowed</option>
                  </select>
          </form>
      </li>

      <li className='w-1/3 p-4 border-r border-black text-black'> 
          <form action="/action_page.php">
              <label for="birthday">Date of Birth: </label>
              <input type="date" id="birthday" name="birthday"/>
          </form>
      </li>

<li className='w-1/3 p-4 border-r'>
      <label for="country-option-4" class="block ml-2 text-sm font-medium text-black ">Sex:  </label>

          <div class="flex items-center mb-4 space-x-4">
              
              <input id="sex-option-1" type="radio" name="Sex" value="Male" class="w-4 h-4 border-gray-300 focus:focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="sex-option-1" class="block ml-2 text-sm font-medium text-black"> Male</label>

              <input id="sex-option-2" type="radio" name="Sex" value="Female" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="sex-option-2" class="block ml-2 text-sm font-medium text-black"> Female</label>
           </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
        <div>
              <label for="Home" class="block mb-2 text-sm font-medium text-black">Home Address: </label>
              <input type="text" id="website" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
          <div>
              <label for="Present" class="block mb-2 text-sm font-medium text-black">Present Address: </label>
              <input type="text" id="website" class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
          </div>
      </li>

      <li className='w-1/3 p-4 '>
          <div>
                <label for="Mobile" class="block mb-2 text-sm font-medium text-black">Mobile Number: </label>
                <input type="number" id="visitors" class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required/>
          </div>
      </li>


      <form action="/action_page.php">
          <label for="upload" class="block mb-2 text-sm font-medium text-black">Add Photo: </label>
            <input type="file" id="myFile" name="filename"/>
      </form>
    </ul>,
  },



  
  {
    question: <p className='font-bold '>PAST MEDICAL HISTORY</p>,
    answer: <ul className=' flex flex-wrap font-semibold'>
     <li className='w-1/3 p-4 border-r border-black content-center'>
      <label for="allergy-option-1" class="block ml-2 text-sm font-medium text-black ">ALLERGIES: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="allergy-option-1" type="radio" name="ALLERGIES" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="allergy-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="allergy-option-2" type="radio" name="ALLERGIES" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="allergy-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="GALLBLADDER-option-1" class="block ml-2 text-sm font-medium text-black ">GALLBLADDER STONE: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="GALLBLADDER-option-1" type="radio" name="GALLBLADDER" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="GALLBLADDER-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="GALLBLADDER-option-2" type="radio" name="GALLBLADDER" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="GALLBLADDER-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="PROSTATE-option-1" class="block ml-2 text-sm font-medium text-black ">PROSTATE PROBLEMS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="PROSTATE-option-1" type="radio" name="PROSTATE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PROSTATE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="PROSTATE-option-2" type="radio" name="PROSTATE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PROSTATE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="AMOEBIASIS-option-1" class="block ml-2 text-sm font-medium text-black ">AMOEBIASIS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="AMOEBIASIS-option-1" type="radio" name="AMOEBIASIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="AMOEBIASIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="AMOEBIASIS-option-2" type="radio" name="AMOEBIASIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="AMOEBIASIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="GOITER-option-1" class="block ml-2 text-sm font-medium text-black ">GOITER: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="GOITER-option-1" type="radio" name="GOITER" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="GOITER-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="GOITER-option-2" type="radio" name="GOITER" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="GOITER-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>


      <li className='w-1/3 p-4'>
      <label for="SEIZURE-option-1" class="block ml-2 text-sm font-medium text-black ">SEIZURE: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="SEIZURE-option-1" type="radio" name="SEIZURE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SEIZURE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="SEIZURE-option-2" type="radio" name="SEIZURE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SEIZURE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="ANEMIA-option-1" class="block ml-2 text-sm font-medium text-black ">ANEMIA: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="ANEMIA-option-1" type="radio" name="ANEMIA" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="ANEMIA-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="ANEMIA-option-2" type="radio" name="ANEMIA" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="ANEMIA-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="GOUT-option-1" class="block ml-2 text-sm font-medium text-black ">GOUT: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="GOUT-option-1" type="radio" name="GOUT" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="GOUT-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="GOUT-option-2" type="radio" name="GOUT" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="GOUT-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="SINUSITIS-option-1" class="block ml-2 text-sm font-medium text-black ">SINUSITIS/ALLERGIC RHINITIS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="SINUSITIS-option-1" type="radio" name="SINUSITIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SINUSITIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="SINUSITIS-option-2" type="radio" name="SINUSITIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SINUSITIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="ARTHRITIS-option-1" class="block ml-2 text-sm font-medium text-black ">ARTHRITIS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="ARTHRITIS-option-1" type="radio" name="ARTHRITIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="ARTHRITIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="ARTHRITIS-option-2" type="radio" name="ARTHRITIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="ARTHRITIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="HEMORROIDS-option-1" class="block ml-2 text-sm font-medium text-black ">HEMORROIDS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="HEMORROIDS-option-1" type="radio" name="HEMORROIDS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HEMORROIDS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="HEMORROIDS-option-2" type="radio" name="HEMORROIDS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HEMORROIDS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="SKIN-option-1" class="block ml-2 text-sm font-medium text-black ">SKIN DISORDERS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="SKIN-option-1" type="radio" name="SKIN" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SKIN-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="SKIN-option-2" type="radio" name="SKIN" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SKIN-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="BACK-option-1" class="block ml-2 text-sm font-medium text-black ">BACK AND JOINT PAINS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="BACK-option-1" type="radio" name="BACK" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="BACK-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="BACK-option-2" type="radio" name="BACK" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="BACK-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="HEPATITIS-option-1" class="block ml-2 text-sm font-medium text-black ">HEPATITIS: A/B/C: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="HEPATITIS-option-1" type="radio" name="HEPATITIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HEPATITIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="HEPATITIS-option-2" type="radio" name="HEPATITIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HEPATITIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 '>
      <label for="STI-option-1" class="block ml-2 text-sm font-medium text-black ">STI/HIV: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="STI-option-1" type="radio" name="STI" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="STI-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="STI-option-2" type="radio" name="STI" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="STI-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="BONE-option-1" class="block ml-2 text-sm font-medium text-black ">BONE FRACTURE: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="BONE-option-1" type="radio" name="BONE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="BONE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="BONE-option-2" type="radio" name="BONE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="BONE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="HYPER-option-1" class="block ml-2 text-sm font-medium text-black ">HYPER ACIDITY/ULCER: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="HYPER-option-1" type="radio" name="HYPER" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HYPER-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="HYPER-option-2" type="radio" name="HYPER" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HYPER-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 '>
      <label for="STROKE-option-1" class="block ml-2 text-sm font-medium text-black ">STROKE: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="STROKE-option-1" type="radio" name="STROKE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="STROKE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="STROKE-option-2" type="radio" name="STROKE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="STROKE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="BREAST-option-1" class="block ml-2 text-sm font-medium text-black ">BREAST MASS/ LUMP: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="BREAST-option-1" type="radio" name="BREAST" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="BREAST-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="BREAST-option-2" type="radio" name="BREAST" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="BREAST-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="HYPERTENSION-option-1" class="block ml-2 text-sm font-medium text-black ">HYPERTENSION: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="HYPERTENSION-option-1" type="radio" name="HYPERTENSION" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HYPERTENSION-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="HYPERTENSION-option-2" type="radio" name="HYPERTENSION" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="HYPERTENSION-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="SURGERY-option-1" class="block ml-2 text-sm font-medium text-black ">SURGERY/INJURY: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="SURGERY-option-1" type="radio" name="SURGERY" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SURGERY-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="SURGERY-option-2" type="radio" name="SURGERY" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SURGERY-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="PAINS-option-1" class="block ml-2 text-sm font-medium text-black ">CHEST PAINS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="PAINS-option-1" type="radio" name="PAINS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PAINS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="PAINS-option-2" type="radio" name="PAINS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PAINS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="KIDNEY-option-1" class="block ml-2 text-sm font-medium text-black ">KIDNEY/BLADDER STONES: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="KIDNEY-option-1" type="radio" name="KIDNEY" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="KIDNEY-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="KIDNEY-option-2" type="radio" name="KIDNEY" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="KIDNEY-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="THYROID-option-1" class="block ml-2 text-sm font-medium text-black ">THYROID PROBLEMS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="THYROID-option-1" type="radio" name="THYROID" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="THYROID-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="THYROID-option-2" type="radio" name="THYROID" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="THYROID-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="CHICKEN-option-1" class="block ml-2 text-sm font-medium text-black ">CHICKEN POX: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="CHICKEN-option-1" type="radio" name="CHICKEN" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="CHICKEN-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="CHICKEN-option-2" type="radio" name="CHICKEN" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="CHICKEN-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="LOSS-option-1" class="block ml-2 text-sm font-medium text-black ">LOSS OF CONCIOUSNESS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="LOSS-option-1" type="radio" name="LOSS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="LOSS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="LOSS-option-2" type="radio" name="LOSS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="LOSS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="TONSILLITIS-option-1" class="block ml-2 text-sm font-medium text-black ">TONSILLITIS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="TONSILLITIS-option-1" type="radio" name="TONSILLITIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="TONSILLITIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="TONSILLITIS-option-2" type="radio" name="TONSILLITIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="TONSILLITIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="DIABETES-option-1" class="block ml-2 text-sm font-medium text-black ">DIABETES MELLITUS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="DIABETES-option-1" type="radio" name="DIABETES" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="DIABETES-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="DIABETES-option-2" type="radio" name="DIABETES" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="DIABETES-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="MEASLES-option-1" class="block ml-2 text-sm font-medium text-black ">MEASLES: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="MEASLES-option-1" type="radio" name="MEASLES" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MEASLES-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="MEASLES-option-2" type="radio" name="MEASLES" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MEASLES-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="TUBERCULOSIS-option-1" class="block ml-2 text-sm font-medium text-black ">TUBERCULOSIS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="TUBERCULOSIS-option-1" type="radio" name="TUBERCULOSIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="TUBERCULOSIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="TUBERCULOSIS-option-2" type="radio" name="TUBERCULOSIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="TUBERCULOSIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="EPILEPSY-option-1" class="block ml-2 text-sm font-medium text-black ">EPILEPSY: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="EPILEPSY-option-1" type="radio" name="EPILEPSY" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EPILEPSY-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="EPILEPSY-option-2" type="radio" name="EPILEPSY" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EPILEPSY-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="MUMPS-option-1" class="block ml-2 text-sm font-medium text-black ">MUMPS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="MUMPS-option-1" type="radio" name="MUMPS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MUMPS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="MUMPS-option-2" type="radio" name="MUMPS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MUMPS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="UTI-option-1" class="block ml-2 text-sm font-medium text-black ">UTI: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="UTI-option-1" type="radio" name="UTI" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="UTI-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="UTI-option-2" type="radio" name="UTI" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="UTI-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="EYE-option-1" class="block ml-2 text-sm font-medium text-black ">EYE OR EAR PROBLEM: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="EYE-option-1" type="radio" name="EYE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EYE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="EYE-option-2" type="radio" name="EYE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EYE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="PNEUMONIA-option-1" class="block ml-2 text-sm font-medium text-black ">PNEUMONIA: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="PNEUMONIA-option-1" type="radio" name="PNEUMONIA" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PNEUMONIA-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="PNEUMONIA-option-2" type="radio" name="PNEUMONIA" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PNEUMONIA-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>


          <div class="flex items-center mb-4 space-x-4">

            <label for="others" class="block mb-2 text-sm font-medium text-black">OTHERS: </label>
            <input type="text" id="first_name" class="border border-gray-300 w-full text-black rounded-lg  p-2.5" required/>

          </div>
      </li>
    </ul>,
    




  }



  ,{
    question: <p className='font-bold'>FAMILY HISTORY</p>,
    answer: <ul className='flex flex-wrap font-semibold'>
     
     <li className='w-1/3 p-4 border-r border-black'>
      <label for="MEASLES-option-1" class="block ml-2 text-sm font-medium text-black ">HIGH BLOOD PRESSURE: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="MEASLES-option-1" type="radio" name="MEASLES" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MEASLES-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="MEASLES-option-2" type="radio" name="MEASLES" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MEASLES-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="TUBERCULOSIS-option-1" class="block ml-2 text-sm font-medium text-black ">TUBERCULOSIS: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="TUBERCULOSIS-option-1" type="radio" name="TUBERCULOSIS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="TUBERCULOSIS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="TUBERCULOSIS-option-2" type="radio" name="TUBERCULOSIS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="TUBERCULOSIS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="EPILEPSY-option-1" class="block ml-2 text-sm font-medium text-black ">HEART DISEASE: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="EPILEPSY-option-1" type="radio" name="EPILEPSY" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EPILEPSY-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="EPILEPSY-option-2" type="radio" name="EPILEPSY" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EPILEPSY-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="MUMPS-option-1" class="block ml-2 text-sm font-medium text-black ">ASTHMA: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="MUMPS-option-1" type="radio" name="MUMPS" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MUMPS-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="MUMPS-option-2" type="radio" name="MUMPS" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MUMPS-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="UTI-option-1" class="block ml-2 text-sm font-medium text-black ">DIABETES: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="UTI-option-1" type="radio" name="UTI" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="UTI-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="UTI-option-2" type="radio" name="UTI" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="UTI-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="EYE-option-1" class="block ml-2 text-sm font-medium text-black ">ALLERGIES: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="EYE-option-1" type="radio" name="EYE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EYE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="EYE-option-2" type="radio" name="EYE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="EYE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 border-r border-black'>
      <label for="PNEUMONIA-option-1" class="block ml-2 text-sm font-medium text-black ">CANCER: </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="PNEUMONIA-option-1" type="radio" name="PNEUMONIA" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PNEUMONIA-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="PNEUMONIA-option-2" type="radio" name="PNEUMONIA" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="PNEUMONIA-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4'>


          <div class="flex items-center mb-4 space-x-4">

            <label for="others" class="block mb-2 text-sm font-medium text-black">ANY OTHER HEREDITARY DISEASE: </label>
            <input type="text" id="first_name" class="border border-gray-300 w-full text-black rounded-lg  p-2.5" required/>

          </div>
      </li>
    </ul>,
  },




  {
    question: <p className='font-bold'>SOCIAL HISTORY</p>,
    answer: <ul className='font-semibold'>

<div class="grid place-items-center">
    
     <li className='w-1/3 p-4'>
      <label for="SMOKE-option-1" class="block ml-2 text-sm font-medium text-black ">Do you smoke?:  </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="SMOKE-option-1" type="radio" name="SMOKE" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SMOKE-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="SMOKE-option-2" type="radio" name="SMOKE" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="SMOKE-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>
   
      <li className='w-1/3 p-4 py-0'>
          <div>
             <label for="packs" class="block mb-2 text-sm font-medium text-black">if yes, how many packs?: (indicate if per days/months) </label>
              <input type="text" id="packs" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
           </div>
      </li>

      <li className='w-1/3 p-4 py-0'>
      <label for="DRINK-option-1" class="block ml-2 text-sm font-medium text-black ">Do you drink?:  </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="DRINK-option-1" type="radio" name="DRINK" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="DRINK-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="DRINK-option-2" type="radio" name="DRINK" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="DRINK-option-2" class="block ml-2 text-sm font-medium text-black"> NO</label>

          </div>
      </li>

      <li className='w-1/3 p-4 '>
      <label for="FREQUENT-option-1" class="block ml-2 text-sm font-medium text-black ">If yes, how frequent?:  </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="FREQUENT-option-1" type="radio" name="FREQUENT" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="FREQUENT-option-1" class="block ml-2 text-sm font-medium text-black"> OCCASIONAL</label>

              <input id="FREQUENT-option-2" type="radio" name="FREQUENT" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="FREQUENT-option-2" class="block ml-2 text-sm font-medium text-black">SELDOM </label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
      <label for="MEDICATION-option-1" class="block ml-2 text-sm font-medium text-black ">Do you take medications at present?  </label>

          <div class="flex items-center mb-4 space-x-4">

              <input id="MEDICATION-option-1" type="radio" name="MEDICATION" value="yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MEDICATION-option-1" class="block ml-2 text-sm font-medium text-black"> YES</label>

              <input id="MEDICATION-option-2" type="radio" name="MEDICATION" value="no" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked/>
              <label for="MEDICATION-option-2" class="block ml-2 text-sm font-medium text-black">NO </label>

          </div>
      </li>

      <li className='w-1/3 p-4'>
          <div>
             <label for="packs" class="block mb-2 text-sm font-medium text-black">if yes, please indicate: </label>
              <input type="text" id="packs" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
           </div>
      </li>


    
      </div>
  </ul>,
  },




{
  question: <p className='font-bold'>VITAL SIGNS AND OTHERS</p>,
   answer: <ul className='font-semibold'>

<p className='font-bold underline'>VITAL SIGNS</p>

        <div class="grid grid-rows-5 grid-flow-col gap-4">
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

  <p className='font-bold underline'>NURSING INTERVENTIONS</p>

                <div>
                        <label for="MED" class="block mb-2 text-sm font-medium text-black">Given Medicine: </label>
                        <input type="text" id="MED" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required/>
                </div>
                <div>
                        <label for="NURSE" class="block mb-2 text-sm font-medium text-black">Given by: </label>
                        <input type="text" id="NURSE" class="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='NAME OF REGISTERED NURSE' required/>
                </div>

                <div className="flex items-center">
                        <input
                            className="w-28 px-2 py-1 border border-gray-300 rounded-md mr-2 text-sm"
                            type="time"
                            value={time}
                            onChange={handleTimeChange}
                        />
                  </div>
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