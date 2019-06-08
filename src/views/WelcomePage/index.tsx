import React from "react";
import { withRouter } from "react-router";
import {
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import styles from "./styles.module.scss";
import { RouteComponentProps } from "react-router";

type LoginScreenProps = RouteComponentProps<any> & {
  someString: string;
};

interface LoginScreenState {
  inputValue: string;
}

class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {

  handleLoginClick = (): void => {
      this.props.history.push("/event-create");
  };
  render() {
    return (
      <Container maxWidth="lg" className={styles["login-screen"]}>
        <Typography variant="h3" gutterBottom>
          Cześć!
        </Typography>
        {/* TODO: add event name from props */}
        <Typography variant="subtitle1">{`Koledzy nie oddali ci kasy za poprzednią imprezę? Masz ju dość rozliczeń kto ile komu jest winien?`}</Typography>

        <Typography variant="subtitle1">{`Aplikacja YourBill zrobi to za Ciebie :)`}</Typography>

        <Button
          style={{marginTop: 20}}
          fullWidth
          variant="contained"
          type="submit"
          size="medium"
          onClick={this.handleLoginClick}
          color="primary"
        >
          Chcę stworzyć nowe wydarzenie!
        </Button>
      </Container>
    );
  }
}
export default withRouter(LoginScreen);
