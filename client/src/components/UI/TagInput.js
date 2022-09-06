import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";

const TagInput = ({ tags, tagData, setTagData }) => {
  const [tagItem, setTagItem] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    tagList.map((tag) => {
      if (tag === "java")
        setTagData([...tagData, { id: 1, name: "java", information: "자바" }]);
      else if (tag === "spring")
        setTagData([
          ...tagData,
          { id: 2, name: "spring", information: "스프링" },
        ]);
      else if (tag === "javascript")
        setTagData([
          ...tagData,
          { id: 3, name: "javascript", information: "자바스크립트" },
        ]);
      else if (tag === "react")
        setTagData([
          ...tagData,
          { id: 4, name: "react", information: "리액트" },
        ]);
    });
  }, [tagList]);
  let hashRef = useRef();

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    setTagList([...tagList, tagItem]);
    setTagItem("");
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  return (
    <WholeBox>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <p ref={hashRef}>{tagItem}</p>
              <Button onClick={deleteTagItem}>X</Button>
            </TagItem>
          );
        })}

        <TagInputs
          type="text"
          placeholder="Press enter to add tags"
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
          list="depList"
        />
        <datalist id="depList">
          {tags.map((tag) => (
            <div key={tag.id}>
              <option value={tag.name}></option>;
            </div>
          ))}
        </datalist>
      </TagBox>
    </WholeBox>
  );
};

const WholeBox = styled.div`
  padding: 10px;
  height: 100vh;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  &:focus-within {
    border-color: tomato;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: tomato;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: tomato;
`;

const TagInputs = styled.input`
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;

export default TagInput;
