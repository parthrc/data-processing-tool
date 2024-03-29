import styled, { css } from "styled-components";

const convertFormat = {
  "application/json": "JSON",
  "text/csv": "CSV",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "EXCEL",
};

// Different types of file formats

const fileFormats = {
  "application/json": css`
    background-color: var(--color-red-700);
    border: 1px solid var(--color-red-700);
    color: white;
  `,

  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": css`
    background-color: var(--color-green-700);
    border: 1px solid var(--color-green-700);
    color: white;
  `,
  "text/csv": css`
    background-color: var(--color-brand-orange-dark);
    border: 1px solid var(--color-brand-orange-dark);
    color: white;
  `,
  default: css`
    color: var(--color-brand-200);
    border: 1px solid var(--color-brand-200);
  `,
};

const StyledFormatIcon = styled.button`
  padding: 0.2rem;
  font-size: 1rem;
  border-radius: 10px;
  margin-bottom: 2px;
  ${(props) => fileFormats[props.fileformat]}

  &:hover {
    cursor: pointer;
    opacity: 80%;
    transform: scale(1.1);
  }
`;

StyledFormatIcon.defaultProps = {
  fileformat: "default",
};

function FileFormatIcon({ fileformat, onClick }) {
  return (
    <StyledFormatIcon fileformat={fileformat} onClick={onClick}>
      {convertFormat[fileformat] || "file"}
    </StyledFormatIcon>
  );
}

export default FileFormatIcon;
