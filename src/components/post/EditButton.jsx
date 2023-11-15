import React from "react";
import styled from "styled-components";

const Button = styled.div`

  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  svg {
    font-size: 20px;
    color:black;
  }
  &:hover {
    background: #fffaed;
  }
`;

const EditButton = (props) => {
  return (
    <Button
      dropdown={props.dropdown}
      key={props.cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </Button>
  );
};

export default EditButton;
