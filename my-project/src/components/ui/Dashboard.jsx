import React, { useState } from "react";
import Avatar from "./Avatar";
import Profile from "./Profile";

const Dashboard = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
  );

  const handleImageChange = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  return (
    <div>
      <Avatar
        selectedImageUrl={selectedImageUrl}
        onImageChange={handleImageChange}
      />
      <Profile selectedImageUrl={selectedImageUrl} />
    </div>
  );
};

export default Dashboard;
