import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuItalic,
  LuBold,
  LuUnderline,
  LuType,
} from "react-icons/lu";
import { BsCode } from "react-icons/bs";
import ContentEditable from "react-contenteditable";
import EditButton from "./EditButton";

const Base = styled.div`
  margin-top: 20px;
`;

const ContentsContainer = styled.div`
  position: relative;
`;

const EditableContainer = styled(ContentEditable)`
  outline: none;
  font-size: 14px;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: #aaa;
  pointer-events: none;
  user-select: none;
  font-size: 14px;
`;

const Editbar = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
`;

const PostEditable = () => {
  const [content, setContent] = useState("");
  const contentEditableRef = useRef(null);

  const handleBlur = () => {
    const updatedContent = contentEditableRef.current.innerHTML;
    setContent(updatedContent);
  };

  const isPlaceholderVisible = content.trim().length === 0;

  return (
    <Base>
      <Editbar>
        <EditButton cmd="bold" name={<LuBold />} />
        <EditButton cmd="underline" name={<LuUnderline />} />
        <EditButton cmd="italic" name={<LuItalic />} />
        <EditButton cmd="formatBlock" arg="h1" name={<LuHeading1 />} />
        <EditButton cmd="formatBlock" arg="h2" name={<LuHeading2 />} />
        <EditButton cmd="formatBlock" arg="h3" name={<LuHeading3 />} />
        <EditButton cmd="formatBlock" arg="p" name={<LuType />} />
        <EditButton
          cmd="insertHTML"
          arg="<pre><code></code></pre>"
          name={<BsCode />}
        />
      </Editbar>
      <ContentsContainer>
        {isPlaceholderVisible && (
          <Placeholder>내용을 입력해보세요!</Placeholder>
        )}
        <EditableContainer
          innerRef={contentEditableRef}
          html={content}
          onChange={handleBlur}
        />
      </ContentsContainer>
    </Base>
  );
};

export default PostEditable;
