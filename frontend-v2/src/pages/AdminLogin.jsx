import { useForm } from "react-hook-form";
import Header from "../ui/Header.jsx";
import Form from "../ui/Form.jsx";
import FormRow from "../ui/FormRow.jsx";
import Input from "../ui/Input.jsx";
import ButtonGroup from "../ui/ButtonGroup.jsx";
import Button from "../ui/Button.jsx";

import { useLoginUser } from "../features/Auth/useLoginUser.jsx";

function AdminLogin() {
  const { handleSubmit, register, formState, reset } = useForm();
  const { errors } = formState;

  const { loginUser, isLoggingIn } = useLoginUser();

  //Form submit handler
  function onSubmit(data) {
    console.log("Form submitted");
    console.log(data);
    loginUser(data);
  }

  return (
    <div>
      <Header>Admin Login</Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email" error={errors?.email?.message}>
          <Input
            name="email"
            id="email"
            type="text"
            value="admin@admin.com"
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
            value="admin123"
            {...register("password", {
              required: "Please enter your password",
            })}
          ></Input>
        </FormRow>
        <ButtonGroup direction="column">
          <Button variation="primary">Login</Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}

export default AdminLogin;
