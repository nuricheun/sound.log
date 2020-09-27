import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styled from "styled-components";

const options = ["Option 1", "Option 2"];
const AutocompleteWrapper = styled.div`
  padding: 0 20px;
`;

export default function CustomInputAutocomplete({ big }) {
  return (
    <AutocompleteWrapper>
      <Autocomplete
        id="custom-input-demo"
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input
              style={{ width: 400, height: big ? 45 : 25 }}
              type="text"
              {...params.inputProps}
            />
          </div>
        )}
      />
    </AutocompleteWrapper>
  );
}
