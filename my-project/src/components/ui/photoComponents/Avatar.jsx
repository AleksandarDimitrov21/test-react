import React, { useState, useRef, useEffect } from "react";

const Avatar = ({ photoURL }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
        // Save the new image URL to localStorage
        localStorage.setItem("avatarImageUrl", reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="avatar ">
      <label
        className="cursor-pointer w-48 h-48 rounded-full overflow-hidden border border-transparent hover:border-gray-300"
        onMouseEnter={() => {
          fileInputRef.current.classList.add("opacity-100");
        }}
        onMouseLeave={() => {
          fileInputRef.current.classList.remove("opacity-100");
        }}
      >
        <img
          className="w-full h-full object-cover "
          src={photoURL}
          alt="avatar"
          onClick={handleImageClick}
        />
      </label>
      <input
        ref={fileInputRef}
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Avatar;
