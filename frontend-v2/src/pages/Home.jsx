import styled from "styled-components";
import Button from "../ui/Button.jsx";
import ButtonGroup from "../ui/ButtonGroup.jsx";
import RowContainer from "../ui/RowContainer.jsx";
import Paragraph from "../ui/Paragraph.jsx";
import { NavLink } from "react-router-dom";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--color-brand-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeTitle = styled.h1`
  color: var(--color-brand-orange);
  font-size: 4rem;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>DATA PROCCESSING AND CLEANING TOOL</HomeTitle>
      <RowContainer>
        <Paragraph>
          Data cleaning and processing is a crucial step in data analysis that
          involves identifying and correcting errors, inconsistencies, and
          inaccuracies in data to ensure that it is accurate, complete, and
          reliable.
        </Paragraph>
        <Paragraph>
          The goal of this project is to develop a smart data cleaning and
          processing tool that allows anyone to clean and process data without
          the need for programming skills.
        </Paragraph>
      </RowContainer>
      <ButtonGroup>
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
        <NavLink to="/register">
          <Button>Register</Button>{" "}
        </NavLink>
      </ButtonGroup>
    </HomeContainer>
  );
}

export default Home;
