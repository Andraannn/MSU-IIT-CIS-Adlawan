function Testing() {

    return(
        <>
        <div class="flex flex-wrap max-w-4xl">
          <div class="bg-gray-200 p-4 w-full md:w-1/3">Column 1</div>
          <div class="bg-gray-300 p-4 w-full md:w-1/3">Column 2</div>
          <div class="bg-gray-400 p-4 w-full md:w-1/3">Column 3</div>
          <div class="bg-gray-500 p-4 w-full md:w-1/3">Column 4</div>
          <div class="bg-gray-600 p-4 w-full md:w-1/3">Column 5</div>
          <div class="bg-gray-700 p-4 w-full md:w-1/3">Column 6</div>
          <div class="bg-gray-800 p-4 w-full md:w-1/3">Column 7 </div>
        </div>

        <div class="flex flex-col">
          <label class="mb-2 font-bold" for="birthdate">Birthdate:</label>
          <input class="border border-gray-400 p-2 mb-2" type="date" id="birthdate" onchange="calculateAge(this.value)"></input>
          <div class="text-gray-600 text-sm" id="age"></div>
        </div>
        </>
    )
}

export default Testing