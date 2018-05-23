import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'asdf', name: 'Peter', age: 25 },
      { id: 'qwer', name: 'Priscilla', age: 19 },
      { id: 'zxcv', name: 'Tiffanie', age: 23 }
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // update the copy of persons
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p>This is working.</p>
        <button
          onClick={this.togglePersonsHandler}
          style={style}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi Priscilla')
    // );
  }
}

export default App;
