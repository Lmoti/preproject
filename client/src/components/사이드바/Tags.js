import React, { useEffect, useState } from "react";
import Tag from "./Tag";

const Tags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch(`http://13.125.253.157:8080/api/tags`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => setTags(data.data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Tag tags={tags} />
    </div>
  );
};

export default Tags;
