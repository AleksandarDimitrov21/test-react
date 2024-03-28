import React, { useState, useRef, useEffect } from "react";

const Avatar = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
  );

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="avatar">
      <label className="cursor-pointer w-48 h-48 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt="avatar"
          onClick={handleImageClick}
        />
        <input
          ref={fileInputRef}
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          onClick={(e) => (e.target.value = null)} // Clear input value on click
        />
      </label>
    </div>
  );
};

export default Avatar;
