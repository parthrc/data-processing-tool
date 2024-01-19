import { useForm } from "react-hook-form";
import Form from "../../ui/Form.jsx";
import FormRow from "../../ui/FormRow.jsx";
import Input from "../../ui/Input.jsx";
import Button from "../../ui/Button.jsx";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/apiUsers.js";
import toast from "react-hot-toast";
import ButtonGroup from "../../ui/ButtonGroup.jsx";

import StyledNavLink from "../../ui/StyledNavLink.jsx";

function RegisterForm() {
  const { handleSubmit, register, getValues, formState, reset } = useForm();

  //Getting all erros of the form
  const { errors } = formState;

  //Mutate function to register new user
  const { mutate, isLoading: isRegistering } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("User registered successfully");
      reset();
    },
    onError: () => {
      toast.error("Error registering user");
    },
  });

  function onError(errors) {
    console.log(errors);
  }

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          name="username"
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required",
          })}
        ></Input>
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          name="email"
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
        ></Input>
      </FormRow>
      <FormRow label="Password" error={errors?.pass1?.message}>
        <Input
          name="pass1"
          type="password"
          id="pass1"
          {...register("pass1", {
            required: "Please enter password",
            validate: (value) =>
              value === getValues().pass2 || "Passwords do not match",
          })}
        ></Input>
      </FormRow>
      <FormRow label="Enter password again" error={errors?.pass2?.message}>
        <Input
          name="pass2"
          type="password"
          id="pass2"
          {...register("pass2", {
            required: "Please enter password",
            validate: (value) =>
              value === getValues().pass1 || "Passwords do not match",
          })}
        ></Input>
      </FormRow>
      <FormRow
        label="Enter your security question"
        error={errors?.security_question?.message}
      >
        <Input
          name="security_question"
          type="text"
          id="security_question"
          {...register("security_question", {
            required: "Please enter your security question.",
          })}
        ></Input>
      </FormRow>
      <FormRow
        label="Enter the answer for the security question"
        error={errors?.security_answer?.message}
      >
        <Input
          name="security_answer"
          type="text"
          id="security_answer"
          {...register("security_answer", {
            required: "Please enter the answer for your security question.",
          })}
        ></Input>
      </FormRow>
      <ButtonGroup direction="column">
        <Button variation="primary">Register</Button>
        <span>
          Already registered?{" "}
          <StyledNavLink to="/login">Login here</StyledNavLink>
        </span>
      </ButtonGroup>
    </Form>
  );
}

export default RegisterForm;
