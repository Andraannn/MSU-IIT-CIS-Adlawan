import { useState } from "react";
function Testing() {
    const [time, setTime] = useState("");
    const handleTimeChange = (e) => {
        setTime(e.target.value);
  };

    return(
        <>
        <ul className="flex flex-wrap">
            <li className="w-1/3 p-4 border-r border-black">Item 1</li>
            <li className="w-1/3 p-4 border-r border-black">Item 2</li>
            <li className="w-1/3 p-4 border-r border-black">Item 3</li>
            <li className="w-1/3 p-4 border-r border-black">Item 4</li>
            <li className="w-1/3 p-4 border-r border-black">Item 5</li>
            <li className="w-1/3 p-4 border-r border-black">Item 6</li>
        </ul>
        <div className="flex items-center">
      <input
        className="w-28 px-2 py-3 border border-black rounded-md mr-2 text-sm"
        type="time"
        value={time}
        onChange={handleTimeChange}
      />
    </div>
        </>
    )
}

export default Testing