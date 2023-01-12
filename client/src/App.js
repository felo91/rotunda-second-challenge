import './App.css';
import React, { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import SelectMembers from './components/SelectMembers';
import axios from 'axios';
import TableRowIssue from './components/TableRowIssue';

function App() {

    const [memberSelected, setMemberSelected] = useState({});
    const [issues, setIssues] = useState([]);

    const fetchIssues = async (memberId) => {
        const axiosParams = {
            url: '/issues',
            method: 'get',
            params: {
                who: memberId
            }
        };
        const response = await axios.request(axiosParams);
        console.log({response: response.data.issues})
        setIssues(response.data.issues);
        console.log({issues})
    }

    useEffect(() => {
        console.log(memberSelected);
        fetchIssues(memberSelected.id)
    }, [memberSelected]);

    useEffect(() => {
        console.log({issues});
    }, [issues]);

    return (
        <body className={`antialiased font-sans bg-gray-200 ${(issues && issues.length>0) ? "" :"h-screen"}`}>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="pl-4">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Issues</h2>
                        </div>
                        <div className="my-2 flex sm:flex-row flex-col">
                            <div className="flex flex-row mb-1 sm:mb-0">
                                <label className="self-center pr-2">Show issues assigned to </label>
                                <div className="relative">
                                    <SelectMembers setMemberSelected={setMemberSelected}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Severity
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(issues && issues.length>0) ? 
                                        issues.map((issue) => {
                                        return (
                                            <TableRowIssue issue={issue}/>
                                        )}):
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"/>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                Theres no issues to show
                                            </td>
                                        </tr>
                                    }  
                                </tbody>
                            </table>
                           
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )}

export default App;
