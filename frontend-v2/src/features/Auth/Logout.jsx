import Button from "../../ui/Button.jsx";
import { useLogout } from "./useLogout.js";

function Logout() {
  const { logout, isLoggingOut } = useLogout();

  return (
    <Button variation="danger" onClick={logout} disabled={isLoggingOut}>
      Logout
    </Button>
  );
}

export default Logout;
