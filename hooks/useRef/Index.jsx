import React, { useRef, useState } from "react";

const Index = () => {
  const imageRef = useRef(null);
  const [isFirstImage, setIsFirstImage] = useState(true);
  const handleChangeImage = () => {
    if (imageRef.current) {
      imageRef.current.src = isFirstImage
        ? "https://cdn.pixabay.com/photo/2025/02/03/22/59/mountain-9380557_1280.jpg"
        : "https://cdn.pixabay.com/photo/2024/12/20/18/31/sunset-9280759_1280.jpg";
      setIsFirstImage(!isFirstImage);
    }
  };
  return (
    <div>
      <h1>Change Image using useRef</h1>
      <img
        ref={imageRef}
        src="https://cdn.pixabay.com/photo/2025/02/22/08/35/mountain-9423779_1280.jpg"
        alt="Mountain Image"
      />
      <button onClick={handleChangeImage}>Change image</button>
    </div>
  );
};

export default Index;
