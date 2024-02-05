import styled from "styled-components";
import { useCurrentUser } from "../features/Auth/useCurrentUser.jsx";

function WelcomeUser() {
  const { currentActiveUser } = useCurrentUser();
  console.log(currentActiveUser);

  const WelcomePara = styled.p``;
  return <WelcomePara>Welcome,</WelcomePara>;
}

export default WelcomeUser;
