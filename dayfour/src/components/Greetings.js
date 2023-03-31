import React, { Component } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Autocomplete } from '@mui/material';
const fruitOptions = ['Lichi', 'Mango', 'Apple','Papaya','Orange'];

export default class GreetingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fruit: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFruitChange = this.handleFruitChange.bind(this);
  }

  handleSubmit(event) {
    alert('Hello, ' + this.state.name + '! Your favorite fruit is ' + this.state.fruit + '.');
    event.preventDefault();
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleFruitChange(event, value) {
    this.setState({ fruit: value });
  }

  render() {
    return (
      <div id='div'>
        <form onSubmit={this.handleSubmit}>
          <TextField id='text'
            label="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
            data-testid="name"
          />
          <Autocomplete
            options={fruitOptions}
            value={this.state.fruit}
            onChange={this.handleFruitChange}
            renderInput={function(params) {
              return (
                <TextField {...params} label="Choose a fruit" data-testid="autocomplete" />
              );
            }}
          />
          <Button id='button' variant="contained" color="success" type="submit" data-testid="button">
            Submit
          </Button>
        </form>
      </div>
    );
  }

}