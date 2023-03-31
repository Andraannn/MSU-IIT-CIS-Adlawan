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
    answer: <ul className='font-semibold'>
      <li>PATIENT TYPE:</li>
      <li>OPD/ID NO.:</li>
      <li>LAST NAME</li>
      <li>FIRST NAME:</li>
      <li>MIDDLE NAME:</li>
      <li>SEX:</li>
      <li>CIVIL STATUS:</li>
      <li>DATE OF BIRTH:</li>
      <li>HOME ADDRESS:</li>
      <li>PRESENT ADDRESS:</li>
      <li>MOBILE NUMBER:</li>
      <li>COLLEGE/DEPARTMENT:</li>
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
    answer: <ul className='font-semibold'>
      <li>HIGH BLOOD PRESSURE:</li>
      <li>TUBERCULOSIS:</li>
      <li>HEART DISEASE:</li>
      <li>ASTHMA:</li>
      <li>DIABETES:</li>
      <li>ALLERGIES:</li>
      <li>CANCER:</li>
      <li>ANY OTHER HEREDITARY DISEASE:</li>
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