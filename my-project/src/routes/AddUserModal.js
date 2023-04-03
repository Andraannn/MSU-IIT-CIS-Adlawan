import React, { useState } from 'react';
import Modal from 'react-modal';

const AddUserModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <button
          onClick={openModal}
          className="flex items-center px-4 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          ADD USER
        </button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h2 className="text-lg font-medium mb-4">ADD USER</h2>
          <form>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                USERNAME
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="name"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="role"
              >
                ROLE
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                id="role"
                type="text"
                placeholder="Doctor, Nurse, or Admin"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add
              </button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };
  
  export default AddUserModal;