// src/components/ImageGallery.tsx

import Masonry from "react-masonry-css";
import "./App.css";

// Number of images you have
const numberOfImages = 14;

// Generate image paths
const imagePaths = Array.from(
  { length: numberOfImages },
  (_, index) => `/image${index + 1}.jpeg`
);

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};
const App: React.FC = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {imagePaths.map((path, index) => (
        <img key={index} src={path} alt={`Image ${index + 1}`} />
      ))}
    </Masonry>
  );
};

export default App;
