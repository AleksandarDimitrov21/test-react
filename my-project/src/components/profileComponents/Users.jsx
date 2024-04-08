import React from "react";
import axios from "axios";

const Users = ({ users }) => {
  const handleDeleteUser = async (userId) => {
    try {
      // Make DELETE request to backend API to delete the user
      await axios.delete(`/user/${userId}`);

      // If deletion is successful, update the users list by filtering out the deleted user
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={user.photo}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold text-lg text-zinc-400">
                  {user.name}
                </div>
                <div className="text-sm text-white font-semibold badge badge-md bg-violet-800 border-none">
                  {user.userType}
                </div>
              </div>
            </div>
          </td>
          <td className="text-zinc-400 text-xl">{user.username}</td>
          <td className="text-zinc-400 text-xl">{user.email}</td>
          <td>
            <button
              className="rounded-full bg-red-500 text-white p-2 mr-2"
              onClick={() => handleDeleteUser(user.id)}
            >
              <img width={20} height={20} src="/delete.svg" alt="delete" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Users;
