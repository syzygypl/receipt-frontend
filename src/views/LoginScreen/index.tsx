import React from 'react'
import { withRouter } from "react-router";
 import {Button, Typography, Container, FormControl, InputLabel, Input} from '@material-ui/core';
import styles from './styles.module.scss';
import {RouteComponentProps} from "react-router"

type LoginScreenProps = RouteComponentProps<any> & {
  someString: string,
}

interface LoginScreenState {
  inputValue: string;
}

class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  state = {
    inputValue: ''
  }
  onInputChange = (event:any):void => {
    this.setState({
      inputValue: event.target.value
    })
  }
  handleLoginClick = ():void => {
    // TO DO preprare login action
    console.log(this.state.inputValue)

    if(this.state.inputValue === "") {
      alert('uzupełnij login')
    } else {
      this.props.history.push('/event-edit')
    }

  }
  render() {
    return (
      <Container maxWidth='lg' className={styles['login-screen']}>
        <Typography variant='h3' gutterBottom>Cześć!</Typography>
        {/* TODO: add event name from props */}
        <Typography variant='subtitle1'>{`Żeby przejść do edycji wydarzenia jakieś wydarzenie`}</Typography>
        <FormControl className={styles['login-screen__form']}>
          <InputLabel htmlFor='login-input'>Login:</InputLabel>
          <Input id='login-input' value={this.state.inputValue} onChange={this.onInputChange}/>
          <div className={styles['login-button']}>
          <Button
            fullWidth
            variant='contained'
            type='submit'
            size='medium'
            onClick={this.handleLoginClick}
            color='primary'>Login</Button>
          </div>
        </FormControl>
      </Container>
    )
  }
}
export default withRouter(LoginScreen);
