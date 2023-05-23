import React, { useState, useEffect } from 'react';

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

const TestingCode = ({isCheckedAll, onCheckAllChange}) => {
    const [checkedValues, setValue] = useState([])
    
    useEffect(() => {
        console.log(checkedValues)
        
      }, [checkedValues]);

  


  

  
    
  return (
    <>
    <div className="p-4">
        <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className='text-xs font-bold text-gray-800 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope="col" class="p-4">
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
                    <Checkbox label="REPORTS" setValue={setValue} parent={true} checkedValues={checkedValues}>
                        <Checkbox value="View_Reports" label="View Reports" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
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
      {/*
      <Checkbox value="Menu" label="MENU" setValue={setValue} parent={true} checkedValues={checkedValues}>
        <Checkbox value="Patient_Menu"  label="View Patient Menu" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Pending_Menu" label="View Pending Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Reports_Menu" label="View Reports Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="ManageUser_Menu" label="View Manage User Menu"  parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="DoctorHome_Menu" label="View Doctor Home Menu" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
      </Checkbox>

      <Checkbox label="PATIENT" setValue={setValue} parent={true} checkedValues={checkedValues}>
        <Checkbox value="View_MedRecord" label="View Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Add_MedRecord" label="Add Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Update_MedRecord" label="Update Medical Record" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
      </Checkbox>

      <Checkbox label="PATIENT RECORD FORM" setValue={setValue} parent={true} checkedValues={checkedValues}>
        <Checkbox value="Step1" label="Can Do Step 1" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Step2" label="Can Do Step 2" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Step3" label="Can Do Step 3" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Step4" label="Can Do Step 4" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Step5" label="Can Do Step 5" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Step6" label="Can Do Step 6" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Step7" label="Can Do Step 7" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
      </Checkbox>

      <Checkbox label="PENDING" setValue={setValue} parent={true} checkedValues={checkedValues}>
        <Checkbox value="View_Pending" label="View Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Update_Pending" label="Update Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Delete_Pending" label="Delete Pending Patient" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
      </Checkbox>

      <Checkbox label="REPORTS" setValue={setValue} parent={true} checkedValues={checkedValues}>
        <Checkbox value="View_Reports" label="View Reports" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
      </Checkbox>

      <Checkbox label="USER" setValue={setValue} parent={true} checkedValues={checkedValues}>
        <Checkbox value="View_User" label="View User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Add_User" label="Add User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Edit_User" label="Edit User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
        <Checkbox value="Delete_User" label="Delete User" parent={false} showExpandIcon={false} setValue={setValue} checkedValues={checkedValues}/>
      </Checkbox>
      */}
    </div>
    </>
  );
};

export default TestingCode;