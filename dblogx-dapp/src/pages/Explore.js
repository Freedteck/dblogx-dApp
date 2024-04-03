import { useState } from "react";
import MainBar from "../components/Mainbar";
import SideBar from "../components/Sidebar";
import useFetch from "../hooks/useFetch";

const Explore = () => {
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs");
  const [endIndex, setEndIndex] = useState(3);

  const handleExplpore = () => {
    setEndIndex(endIndex + 3);
  };

  return (
    <div className='container grid-container'>
      {error && (
        <div style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
          {error}
        </div>
      )}
      {isPending && (
        <div
          style={{ color: "green", textAlign: "center", fontSize: "1.5rem" }}>
          Loading...
        </div>
      )}
      {blogs && <SideBar blogs={blogs} />}
      {blogs && (
        <MainBar
          blogs={blogs}
          endIndex={endIndex}
          handleExplore={handleExplpore}
        />
      )}
    </div>
  );
};

export default Explore;
