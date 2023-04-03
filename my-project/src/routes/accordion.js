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


const data = [
  {
    question: <p className='font-bold'>PERSONAL INFORMATION</p>,
    answer: <ul className='flex flex-wrap font-semibold'>
      <li className='w-1/3 p-4 border-r border-black'>PATIENT TYPE:</li>
      <li className='w-1/3 p-4 border-r border-black'>OPD/ID NO.:</li>
      <li className='w-1/3 p-4 border-r'>LAST NAME</li>
      <li className='w-1/3 p-4 border-r border-black'>FIRST NAME:</li>
      <li className='w-1/3 p-4 border-r border-black'>MIDDLE NAME:</li>
      <li className='w-1/3 p-4 border-r'>SEX:</li>
      <li className='w-1/3 p-4 border-r border-black'>CIVIL STATUS:</li>
      <li className='w-1/3 p-4 border-r border-black'>DATE OF BIRTH:</li>
      <li className='w-1/3 p-4 border-r'>HOME ADDRESS:</li>
      <li className='w-1/3 p-4 border-r border-black'>PRESENT ADDRESS:</li>
      <li className='w-1/3 p-4 border-r border-black'>MOBILE NUMBER:</li>
      <li className='w-1/3 p-4 border-r'>COLLEGE/DEPARTMENT:</li>
    </ul>,
  },
  {
    question: <p className='font-bold'>PAST MEDICAL HISTORY</p>,
    answer: <ul className='font-semibold'>
      <li>ALLERGIES</li>
      <li>AMOEBIASIS</li>
      <li>ANEMIA</li>
      <li>ARTHRITIS</li>
      <li>BACK AND JOINT PAINS</li>
      <li>OTHERS:</li>
    </ul>,
  },{
    question: <p className='font-bold'>FAMILY HISTORY</p>,
    answer: <ul className='flex flex-wrap font-semibold'>
      <li className='w-1/3 p-4 border-r border-black'>HIGH BLOOD PRESSURE:</li>
      <li className='w-1/3 p-4 border-r border-black'>TUBERCULOSIS:</li>
      <li className='w-1/3 p-4 border-r'>HEART DISEASE:</li>
      <li className='w-1/3 p-4 border-r border-black'>ASTHMA:</li>
      <li className='w-1/3 p-4 border-r border-black'>DIABETES:</li>
      <li className='w-1/3 p-4 border-r'>ALLERGIES:</li>
      <li className='w-1/3 p-4 border-r border-black'>CANCER:</li>
      <li className='w-1/3 p-4 border-r border-black'>ANY OTHER HEREDITARY DISEASE:</li>
    </ul>,
  },
  {
    question: <p className='font-bold'>SOCIAL HISTORY</p>,
    answer: <ul className='font-semibold'>
    <li>DO YOU SMOKE?</li>
    <li>DO YOU DRINK ALCOHOL?</li>
    <li>DO YOU TAKE MEDICATIONS AT PRESENT?</li>
  </ul>,
  },
{
  question: <p className='font-bold'>VITAL SIGNS AND OTHERS</p>,
   answer: <ul className='font-semibold'>
    <p className='font-bold underline'>VITAL SIGNS</p>
    <li>TEMPERATURE (C): </li>
    <li>PULSE RATE (BPM): </li>
    <li>RESTING RATE (BPM): </li>
    <li>BLOOD PRESSURE (MMHG): </li>
    <li>WEIGHT (KG): </li>
    <p className='font-bold underline'>NURSING INTERVENTIONS</p>
    <li>INSERT</li>
    <li>INSERT</li>
    <li>INSERT</li>
  </ul>,
},

]
export default Accordion; 