import styled from "styled-components";

function Home() {
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
    font-size: 3.5rem;
    padding-left: 5rem;
    padding-right: 5rem;
    text-align: center;
    margin-bottom: 2rem;
  `;

  const Paragraph = styled.p`
    color: antiquewhite;
    font-size: 1.2rem;
    font-weight: 400;
    padding-left: 10rem;
    padding-right: 10rem;
    margin-bottom: 1rem;
    text-align: center;
  `;

  return (
    <HomeContainer>
      <HomeTitle>DATA PROCCESSING AND CLEANING TOOL</HomeTitle>
      <Paragraph>
        Data cleaning and processing is a crucial step in data analysis that
        involves identifying and correcting errors, inconsistencies, and
        inaccuracies in data to ensure that it is accurate, complete, and
        reliable.
      </Paragraph>
      <Paragraph>
        The goal of this project is to develop a smart data cleaning and
        processing tool that allows anyone to clean and process data without the
        need for programming skills.
      </Paragraph>
    </HomeContainer>
  );
}

export default Home;
