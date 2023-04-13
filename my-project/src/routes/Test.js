import React, { useState } from 'react';

function Testing() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  function handleBirthdateChange(event) {
    const inputBirthdate = event.target.value;
    setBirthdate(inputBirthdate);

    // calculate age if birthdate is provided
    if (inputBirthdate) {
      const birthday = new Date(inputBirthdate);
      const ageInMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageInMs);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  }

    return(
        <>
      {/* AGE CALCULATION*/}
        <div className="flex flex-col">
      <label htmlFor="birthdate" className="mb-2 font-bold text-lg text-gray-700">Birthday</label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        className="border border-gray-400 p-2 rounded-md"
        value={birthdate}
        onChange={handleBirthdateChange}
      />
      {age && <p className="mt-2 text-gray-700">Age: {age}</p>}
    </div>
    {/* AGE CALCULATION*/}
        </>
    )
}

export default Testing