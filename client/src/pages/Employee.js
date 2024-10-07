import React, { useEffect, useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import summaryAPI from '../api/api';
import toast from 'react-hot-toast';
import { FaRegCircleUser } from "react-icons/fa6";

function Employee() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const dataResponse = await fetch(summaryAPI.get.url, {
                    method: summaryAPI.get.method,
                    headers: {
                        "content-type": "application/json"
                    }
                });
                const dataAPI = await dataResponse.json();
                console.log(dataAPI)
                if (dataAPI.error) {
                    toast.error(dataAPI.message);
                } else {
                    
                    setEmployees(dataAPI.data);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const handleDeleteClick = (id) => {
        setSelectedEmployeeId(id);
        setShowDeleteDialog(true);
    };

    const confirmDelete = async () => {
        try {
            console.log(selectedEmployeeId) 
            const dataResponse = await fetch(`${summaryAPI.delete.url}/${selectedEmployeeId}`, {
                method: summaryAPI.delete.method,
                headers: {
                    "content-type": "application/json"
                }
            });
         
            const dataAPI = await dataResponse.json();
            if (dataAPI.error) {
                toast.error(dataAPI.message);
            } else {
                setEmployees(employees.filter(emp => emp._id !== selectedEmployeeId));
                toast.success(dataAPI.message)
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setShowDeleteDialog(false);
        }
    };
    const filteredEmployees = employees.filter((employee) => {
        const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
        return (
            fullName.includes(searchQuery.toLowerCase()) ||
            employee.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className="flex flex-col justify-center items-center w-full max-w-6xl mt-5 mx-auto text-gray-700 gap-2 p-4">
            <h2 className="mr-auto text-base md:text-lg">Employee: <span className="text-blue-400 cursor-pointer">Records</span></h2>
            <hr className="border-t border-gray-300 w-full" />
    
            <Link to={"/employee/add"} className="ml-auto">
                <div className="flex justify-center items-center gap-2 p-2 bg-blue-400 rounded-md border border-gray-50 border-opacity-20 mb-3">
                    <FaPlusSquare className="text-white" />
                    <button className="uppercase text-sm md:text-base text-white font-light">Add Employee</button>
                </div>
            </Link>
    
            <div className="w-full h-auto rounded-md border-2 border-gray-300 border-opacity-50">
                <div className="mx-5 my-5">
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
                        <div className="gap-2 flex items-center justify-center mb-4 md:mb-0">
                            <label htmlFor="lists" className="text-sm md:text-base">Show</label>
                            <select id="lists" name="browser" className="border border-gray-200 rounded-lg w-[4rem] h-[2rem]">
                                <option value="10">10</option>
                                <option value="All">All</option>
                            </select>
                            <p className="text-sm md:text-base">entries</p>
                        </div>
    
                        <div className="flex items-center justify-center gap-2">
                            <p className="text-sm md:text-base">Search:</p>
                            <input className="px-2 h-[2rem] w-full md:w-[12rem] border border-gray-200 rounded-lg" onChange={(e) => setSearchQuery(e.target.value)} placeholder='first name or last name'/>
                        </div>
                    </div>
    
                    <div className="overflow-x-auto mt-3">
                        <table className="text-gray-700 border border-gray-200 w-full">
                            <thead>
                                <tr className="uppercase text-xs md:text-sm">
                                    <th className="font-medium p-2">Photo</th>
                                    <th className="font-medium p-2">Name</th>
                                    <th className="font-medium p-2">Username</th>
                                    <th className="font-medium p-2">Country</th>
                                    <th className="font-medium p-2">Email</th>
                                    <th className="font-medium p-2">Account Type</th>
                                    <th className="font-medium p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center text-xs md:text-sm">
                                {filteredEmployees.map((employee) => (
                                    <tr key={employee._id}>
                                        <td className="p-2">
                                            {employee.photo ? (
                                                <img 
                                                    src={employee.photo} 
                                                    alt={`${employee.firstName} ${employee.lastName}`} 
                                                    className="w-10 h-10 object-cover rounded-full mx-auto" 
                                                />
                                            ) : (
                                                <FaRegCircleUser className="w-10 h-10 object-cover rounded-full mx-auto" />
                                            )}
                                        </td>
                                        <td className="p-2">{employee.firstName} {employee.lastName}</td>
                                        <td className="p-2">{employee.username}</td>
                                        <td className="p-2">{employee.country}</td>
                                        <td className="p-2">{employee.email}</td>
                                        <td className="p-2">{employee.accountType}</td>
                                        <td className="p-2 flex justify-center items-center gap-3">
                                            <Link to={`/employee/edit/${employee._id}`}>
                                                <FaRegEdit className="bg-yellow-500 text-2xl md:text-3xl text-white rounded-md p-1" />
                                            </Link>
                                            <RiDeleteBin5Line
                                                className="bg-red-500 text-2xl md:text-3xl text-white rounded-md p-1"
                                                onClick={() => handleDeleteClick(employee._id)} 
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    
            {showDeleteDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p className="text-sm md:text-base">Are you sure you want to delete this employee?</p>
                        <div className="mt-4 flex gap-2">
                            <button
                                onClick={confirmDelete}
                                className="bg-red-400 text-white p-2 rounded hover:bg-red-500"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setShowDeleteDialog(false)}
                                className="bg-gray-300 p-2 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
    
}

export default Employee;
