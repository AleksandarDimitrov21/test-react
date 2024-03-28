import React from "react";
import Shop from "../components/ui/Shop";
import NavBar from "../components/ui/NavBar";
import Drawer from "../components/ui/Drawer";
import ScrollButton from "../components/ui/ScrollButton";
import PromoSlide from "../components/ui/PromoSlide";
const Product = ({ status, setStatus }) => {
  return (
    <>
      <div className="bg-white flex">
        <div className="overflow-hidden h-16 ">
          <NavBar isLoggedIn={status} setIsLoggedIn={setStatus} />
        </div>
        <div className="flex flex-col flex-grow ">
          <h1 className="flex justify-start mt-20 pl-10 text-4xl text-violet-500">
            Products:
          </h1>
          <ScrollButton />

          <div className="flex">
            <div>
              <Drawer />
            </div>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-3 px-20 gap-5">
                <Shop
                  title={"Samsung M70B"}
                  image={
                    "https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/samsung-neo-qled-8k/03162023/QN65QN900CFXZA_003_L-Perspective_Titan-Black-1600x1200-1.jpg?$product-details-jpg$"
                  }
                  price={2300}
                />
                <Shop
                  title={"V-Tac"}
                  image={
                    "https://www.smart-house.bg/4986-thickbox_default/smart-robotic-vacuum-cleaner.jpg"
                  }
                  price={800}
                />
                <Shop
                  title={"LG 27"}
                  image={
                    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650555585-screen-shot-2022-04-21-at-11-39-20-am-1650555572.png?crop=0.9342359767891683xw:1xh;center,top&resize=980:*"
                  }
                  price={1900}
                />
                <Shop
                  title={"Yale"}
                  image={
                    "https://media.cnn.com/api/v1/images/stellar/prod/yale-assure-lock-2-product-card-cnnu.jpeg?c=16x9&q=h_720,w_1280,c_fill"
                  }
                  price={65}
                />
                <Shop
                  title={"LG 27"}
                  image={
                    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650555585-screen-shot-2022-04-21-at-11-39-20-am-1650555572.png?crop=0.9342359767891683xw:1xh;center,top&resize=980:*"
                  }
                  price={1900}
                />
                <Shop
                  title={"LG 27"}
                  image={
                    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650555585-screen-shot-2022-04-21-at-11-39-20-am-1650555572.png?crop=0.9342359767891683xw:1xh;center,top&resize=980:*"
                  }
                  price={1900}
                />
                <Shop
                  title={"LG 27"}
                  image={
                    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1650555585-screen-shot-2022-04-21-at-11-39-20-am-1650555572.png?crop=0.9342359767891683xw:1xh;center,top&resize=980:*"
                  }
                  price={1900}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
