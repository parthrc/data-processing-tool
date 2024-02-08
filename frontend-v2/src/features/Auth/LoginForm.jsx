import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import Button from "../../ui/Button.jsx";
import StyledNavLink from "../../ui/StyledNavLink.jsx";
import { useForm } from "react-hook-form";
import { useLoginUser } from "./useLoginUser.jsx";
import Header from "../../ui/Header.jsx";
function LoginForm() {
  //Initializing the react-form-hook
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  //custom hook to login
  const { loginUser, isLoggingIn } = useLoginUser();

  //onSubmit
  function onSubmit(data) {
    console.log("Logging in");
    loginUser(data);
  }

  return (
    <>
      <Header>Login</Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email" error={errors?.username?.message}>
          <Input
            name="email"
            id="email"
            type="text"
            disabled={isLoggingIn}
            value="t3@mail.com"
            {...register("email", {
              required: "Please enter your email",
            })}
          ></Input>
        </FormRow>
        <FormRow label="Password" error={errors?.password?.message}>
          <Input
            name="password"
            id="password"
            type="password"
            disabled={isLoggingIn}
            value="t3t3t3"
            {...register("password", {
              required: "Please enter your password",
            })}
          ></Input>
        </FormRow>
        <ButtonGroup direction="column">
          <Button variation="primary">Login</Button>
          <span>
            Not registered?
            <StyledNavLink to="/register">Register here</StyledNavLink>
          </span>
        </ButtonGroup>
      </Form>
    </>
  );
}

export default LoginForm;
