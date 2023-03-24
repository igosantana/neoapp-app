import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 0.8rem;
  }
`;
export const PaginationButton = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  ${(props) => (props.disabled ? disabled : enabled)}
  svg {
    width: 32px;
    height: 32px;
    color: var(--primary-color);
  }
`;

const enabled = `
    cursor: pointer;
    color: var(--primary-color)};

    &:hover {
        scale: 1.2;
    }
`;
const disabled = `
    color: #ffe6e6;
`;

export const PaginationLabel = styled.label`
  font-size: 1rem;
`;
