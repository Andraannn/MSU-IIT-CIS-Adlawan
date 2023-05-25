import React, { useState, useEffect } from "react"
const ExpandIcon = ({ isExpanded, handleLabelClick }) => {
    return (
      <svg
        className={`h-4 w-4 transform transition-transform ${
          isExpanded ? 'rotate-90' : ''
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={handleLabelClick}
      >
        <path
          fillRule="evenodd"
          d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  };
  
  const Checkbox = ({ label, children, showExpandIcon = true, onCheckAllChange, setValue, isCheckedAll, parent, checkedValues}) => {
      const [isChecked, setIsChecked] = useState(false);
      const [isExpanded, setIsExpanded] = useState(false);
  
      useEffect(() => {
          setIsChecked(isCheckedAll);
          
        }, [isCheckedAll]);
      const handleCheckboxChange = (event) => {
          const {value, checked} = event.target;
          const parent = event.target.parentElement;
          const isParent = parent.classList.contains('parent');
          if(!isParent){
              if(checked){
                  setValue(pre => [...pre,value])
                  
              }else(
                  setValue(pre =>{
                      return [...pre.filter(skill => skill!==value)]
                  })
              )
          }else{
              
              if(checked){
                  children.map(child => {(!checkedValues.includes(child.props.label)) && setValue(pre => [...pre, child.props.label])})
                  
              }else{
                  children.map(child => {setValue(pre => { return[...pre.filter(skill=>skill!==child.props.label)]})});
                  
              }
              
          }
          
          
          setIsChecked(event.target.checked);
          /*if (onCheckAllChange) {
            onCheckAllChange(event.target.checked);
          }
          */
        };
        const handleLabelClick = () => {
          setIsExpanded(!isExpanded);
          
        };
  
        
    return (
      <div className="pl-4">
        <div
          className="inline-flex items-center cursor-pointer"
          
        >
          {showExpandIcon && <ExpandIcon isExpanded={isExpanded} handleLabelClick={handleLabelClick}/>}
          <label className={`${(parent) && "parent"} ml-2 inline-flex items-center`}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              checked={isChecked}
              onChange={handleCheckboxChange}
              value={label}
            />
            <span className="ml-2 text-gray-700">{label}</span>
          </label>
        </div>
        {isExpanded && (
          <div className="pl-4">
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                value: label,
                isCheckedAll: isChecked,
                onChange: handleCheckboxChange,
              });
            })}
          </div>
        )}
      </div>
    );
  };

function AddUser(){
        const [showModal, setShowModal] = React.useState(false);

        const [checkedValues, setValue] = useState([])
        function handleChange(event){
            const {value, checked} = event.target

            if(checked){
                setValue(pre => [...pre,value])

            }else(
                setValue(pre =>{
                    return [...pre.filter(skill => skill!==value)]
                })
            )
        }
        console.log(checkedValues)

        useEffect(() => {
            console.log(checkedValues)
            
          }, [checkedValues]);
        
        const renderSwitch = (param) => {
          switch(param) {
            case 'edit':
              return (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-auto mx-auto max-w-6xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                            <div className="flex w-full items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold text-black">MANAGE USER</h3>
                            </div>
                        {/*body*/}
                        <div className="relative p-5 flex-auto">
                          <form>
                            <div className="px-5">
                              <label for="role"
                                  className="block text-gray-700 font-medium mb-2 w-96"
                                  htmlFor="role"
                              >
                              CHANGE ROLE
                              </label>
                            <select className="w-50 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="role">
                                <option>Select a Role</option>
                                <option>ADMIN</option>
                                <option>DOCTOR</option>
                                <option>NURSE</option>
                            </select>
                            </div>
                          </form>
                        </div>
                        <div className="my-5 h-60 overflow-y-auto">
                        <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs font-bold text-gray-800 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="p-4">
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            NAME
                                        </th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className='w-full p-4'>
                                        <Checkbox value="Menu" label="MENU" setValue={setValue} parent={true} checkedValues={checkedValues}>
                                            <Checkbox value="Patient_Menu"  label="View Patient Menu" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Pending_Menu" label="View Pending Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Reports_Menu" label="View Reports Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="ManageUser_Menu" label="View Manage User Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="DoctorHome_Menu" label="View Doctor Home Menu" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                        </Checkbox>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className='w-full p-4'>
                                        <Checkbox label="PATIENT" setValue={setValue} parent={true} checkedValues={checkedValues}>
                                            <Checkbox value="View_MedRecord" label="View Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Add_MedRecord" label="Add Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Update_MedRecord" label="Update Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                        </Checkbox>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className='w-full p-4'>
                                        <Checkbox label="PATIENT RECORD FORM" setValue={setValue} parent={true} checkedValues={checkedValues}>
                                            <Checkbox value="Step1" label="Can Do Step 1" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Step2" label="Can Do Step 2" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Step3" label="Can Do Step 3" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Step4" label="Can Do Step 4" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Step5" label="Can Do Step 5" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Step6" label="Can Do Step 6" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Step7" label="Can Do Step 7" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                        </Checkbox>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className='w-full p-4'>
                                        <Checkbox label="PENDING" setValue={setValue} parent={true} checkedValues={checkedValues}>
                                            <Checkbox value="View_Pending" label="View Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Update_Pending" label="Update Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Delete_Pending" label="Delete Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                        </Checkbox> 
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className='w-full p-4'>
                                        <Checkbox label="REPORTS" setValue={setValue} checkedValues={checkedValues}>
                                            <Checkbox value="View_Reports" label="View Reports" showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                        </Checkbox>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className='w-full p-4'>
                                        <Checkbox label="USER" setValue={setValue} parent={true} checkedValues={checkedValues}>
                                            <Checkbox value="View_User" label="View User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Add_User" label="Add User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Edit_User" label="Edit User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                            <Checkbox value="Delete_User" label="Delete User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                                        </Checkbox>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                SAVE CHANGES
                              </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              )
              case 'add':
              return (
                <>
                <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex w-96 items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    ADD USER
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-950 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                <form>
            <div className="p-5">
              <label for="name"
                className="block text-gray-700 font-medium mb-2 w-96"
                htmlFor="name"
              >
                USERNAME
              </label>
              <div className="main">
              <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" list="names" placeholder="Enter your username"
              />
              <datalist id= "names">
                    <option>andrei.adlawan</option>
                    <option>cyrus.conde</option>
                    <option>andrei.anghay</option>
                    <option>phoenix.dotarot</option>
              </datalist>
              </div>
            </div>
            <div className="px-5">
            <label for="role"
                className="block text-gray-700 font-medium mb-2 w-96"
                htmlFor="role"
              >
                ROLES
              </label>
            <select className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="role">
                <option>Select a Role</option>
                <option>ADMIN</option>
                <option>DOCTOR</option>
                <option>NURSE</option>
            </select>
        </div>
        <div className="my-5 h-60 overflow-y-auto">
        <table class="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs font-bold text-gray-800 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-4">
                        </th>
                        <th scope="col" class="px-6 py-3">
                            NAME
                        </th>
                    </tr>
                </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className='w-full p-4'>
                        <Checkbox value="Menu" label="MENU" setValue={setValue} parent={true} checkedValues={checkedValues}>
                            <Checkbox value="Patient_Menu"  label="View Patient Menu" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Pending_Menu" label="View Pending Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Reports_Menu" label="View Reports Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="ManageUser_Menu" label="View Manage User Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="DoctorHome_Menu" label="View Doctor Home Menu" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                        </Checkbox>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className='w-full p-4'>
                        <Checkbox label="PATIENT" setValue={setValue} parent={true} checkedValues={checkedValues}>
                            <Checkbox value="View_MedRecord" label="View Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Add_MedRecord" label="Add Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Update_MedRecord" label="Update Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                        </Checkbox>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className='w-full p-4'>
                        <Checkbox label="PATIENT RECORD FORM" setValue={setValue} parent={true} checkedValues={checkedValues}>
                            <Checkbox value="Step1" label="Can Do Step 1" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Step2" label="Can Do Step 2" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Step3" label="Can Do Step 3" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Step4" label="Can Do Step 4" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Step5" label="Can Do Step 5" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Step6" label="Can Do Step 6" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Step7" label="Can Do Step 7" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                        </Checkbox>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className='w-full p-4'>
                        <Checkbox label="PENDING" setValue={setValue} parent={true} checkedValues={checkedValues}>
                            <Checkbox value="View_Pending" label="View Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Update_Pending" label="Update Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Delete_Pending" label="Delete Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                        </Checkbox> 
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className='w-full p-4'>
                        <Checkbox label="REPORTS" setValue={setValue} checkedValues={checkedValues}>
                            <Checkbox value="View_Reports" label="View Reports" showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                        </Checkbox>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className='w-full p-4'>
                        <Checkbox label="USER" setValue={setValue} parent={true} checkedValues={checkedValues}>
                            <Checkbox value="View_User" label="View User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Add_User" label="Add User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Edit_User" label="Edit User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                            <Checkbox value="Delete_User" label="Delete User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
                        </Checkbox>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
            </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              )
              }
        }
              
    return (
        <>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">        
    <div class="pb-4 pt-6 px-2 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label><span>
        <button
        className="bg-yellow-600 text-white active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-yellow-700 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal('add')}
      >
        ADD USER
      </button>  
        </span>
        <div class="relative mt-2">
            <div class="absolute inset-y-1 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for user"/>
        </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs font-bold text-gray-800 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    USERNAME
                </th>
                <th scope="col" class="px-6 py-3">
                    ROLE
                </th>
                <th scope="col" class="px-10 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4">
                    1
                </th>
                <td class="px-6 py-4">
                    andreigabrielle.adlawan
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    DOCTOR
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => setShowModal('edit')}>Edit</a>
                    <a href="#" class="px-5 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4">
                    2
                </th>
                <td class="px-6 py-4">
                    cyrus.conde
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ADMIN
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="px-5 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4">
                    3
                </th>
                <td class="px-6 py-4">
                    phoenix.dotarot
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    NURSE
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="px-5 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>
        </tbody>
        {renderSwitch(showModal)}
    </table>
</div>
</>
        )
    }
    

export default AddUser