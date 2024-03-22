import React from "react";

const UserInput = ({ type, placeholder, name, value, onChange }) => {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 w-full my-1 rounded-xl bg-white border border-black hover:bg-neutral-100">
        <input
          className="text-gray-900"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default UserInput;
