import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import Button from "../../ui/Button.jsx";
import StyledNavLink from "../../ui/StyledNavLink.jsx";
function LoginForm() {
  return (
    <Form>
      <FormRow label="Username">
        <Input name="username" id="username" type="text"></Input>
      </FormRow>
      <FormRow label="Password">
        <Input name="password" id="password" type="password"></Input>
      </FormRow>
      <ButtonGroup direction="column">
        <Button variation="primary">Login</Button>
        <span>
          Not registered?
          <StyledNavLink to="/register">Register here</StyledNavLink>
        </span>
      </ButtonGroup>
    </Form>
  );
}

export default LoginForm;
