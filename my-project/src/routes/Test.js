function Testing() {
    return(
    <>
    <h1>FOLLOW UP</h1>
        <div className="grid grid-cols-2 gap-x-12">
            <div class="col-span-3 lg:col-span-1">
                <div className="font-bold">CHIEF COMPLAINT:
                    <div className="col-span-3 lg:col-span-1">
                        <input type="text" id="id_num" class="border border-black text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
                    </div>  
                </div>
                <div className="font-bold">VITAL SIGNS:
                </div>
                <div className="font-bold">HISTORY OF PRESENT ILLNESS:
                </div>
            </div>
        </div>
    </>
    )
}

export default Testing