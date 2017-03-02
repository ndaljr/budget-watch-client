import React from "react";
import { Message, Button, Grid, Form } from "semantic-ui-react";

import LoginFormInputGroup from "./LoginFormInputGroup";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "60vh"
};

const buttonStyle = {
  marginTop: 20
};

const LoginForm = ({ errors, userLogin, updateFieldState, isLoading, validateUserInput}) => (
  <div style={style}>
    <Grid centered>
      <Grid.Column width={10}>
        <Message
          header="Welcome to Budget Watch" 
          content="Fill in the form for more awesomeness"
          attached
          color="teal"
        />

        <Form size="large" className="attached fluid segment">
          <LoginFormInputGroup
            name="userInput"
            label="Username or Email"
            errors={errors.userInput}
            updateFieldState={updateFieldState}
            validateUserInput={validateUserInput}
          />

          <LoginFormInputGroup
            name="password" 
            label="password"
            errors={errors.password}
            updateFieldState={updateFieldState}
          />
        </Form>
        <Button
          basic style={buttonStyle}
          loading={isLoading}
          onClick={userLogin}
          size="large"
          primary>Login
        </Button>
      </Grid.Column>
    </Grid>
  </div>
);

LoginForm.propTypes = {
  errors: React.PropTypes.object,
  updateFieldState: React.PropTypes.func.isRequired,
  validateUserInput: React.PropTypes.func.isRequired,
  userLogin: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool.isRequired
};

export default LoginForm;