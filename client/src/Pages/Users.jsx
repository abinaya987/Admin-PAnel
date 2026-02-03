import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Users() {
    const { users } = useContext(AppContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Name</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Email</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-semibold">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-50 text-gray-700">
                                <td className="py-3 px-4 border-b">{user.name}</td>
                                <td className="py-3 px-4 border-b">{user.email}</td>
                                <td className="py-3 px-4 border-b">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold 
                                        ${user.role === 'Admin' ? 'bg-red-100 text-red-800' : 
                                          user.role === 'Manager' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                        {user.role}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users