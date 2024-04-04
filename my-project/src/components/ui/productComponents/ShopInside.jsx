import React from "react";
import NavBar from "../navigation/NavBar";

const ShopInside = ({ status, setStatus }) => {
  const [smallImages, setSmallImages] = React.useState([
    {
      url: "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/samsung-neo-qled-8k/03162023/QN65QN900CFXZA_003_L-Perspective_Titan-Black-1600x1200-1.jpg?$product-details-jpg$",
      selected: false,
    },
    {
      url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650555585-screen-shot-2022-04-21-at-11-39-20-am-1650555572.png?crop=0.9342359767891683xw:1xh;center,top&resize=980:*",
      selected: false,
    },
    {
      url: "https://www.smart-house.bg/4986-thickbox_default/smart-robotic-vacuum-cleaner.jpg",
      selected: false,
    },
  ]);

  const [mainImageHeight, setMainImageHeight] = React.useState(400);

  const handleImageClick = (index) => {
    setSmallImages(
      smallImages.map((image, i) => {
        if (i === index) {
          return { ...image, selected: true };
        } else {
          return { ...image, selected: false };
        }
      })
    );
  };

  return (
    <div className=" min-h-screen bg-white">
      <div className="overflow-hidden h-16 ">
        <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
      </div>
      <div className="flex justify-between items-center mt-32">
        <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-300">
          <img
            src={
              (smallImages.find((image) => image.selected) || smallImages[0])
                ?.url ||
              "https://www.smart-house.bg/4986-thickbox_default/smart-robotic-vacuum-cleaner.jpg"
            }
            alt="Product Image"
            className="w-full h-auto max-w-md mb-4"
            style={{ height: `${mainImageHeight}px`, objectFit: "cover" }}
          />
          <div className="flex flex-wrap w-full justify-center">
            {smallImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Small image ${index}`}
                className={`w-1/3 h-auto object-cover object-center cursor-pointer ${
                  image.selected
                    ? "border-2 border-gray-400"
                    : "hover:border-2 hover:border-gray-300"
                }`}
                onClick={() => handleImageClick(index)}
                style={{ maxHeight: "120px", maxWidth: "80px", margin: "4px" }}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 ml-32 mb-32">
          <h2 className="text-3xl mb-2 text-black">Product Name</h2>
          <p className="text-slate-800 ">Kod: 123123</p>
          <p className="text-slate-800 ">In stock</p>
          <p className="mb-4 mt-2 text-slate-900 text-xl">
            Harakteristiki za produkta
          </p>
          <p className="text-3xl mb-2 text-black">Price: 1289 00 лв.</p>
          <button className="mt-4 bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopInside;
