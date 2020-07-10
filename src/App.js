import React, { Component } from 'react';
// import React, { useState } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    person:[
      {id: 'asd123', name: 'Jane', age: 24},
      {id: 'asd143', name: 'Josh', age: 26},
      {id: 'asd453', name: 'Ali', age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.person.splice();
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  }

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.person[personIndex]
    }

    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.person]

    persons[personIndex] = person

    this.setState({ person : persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {

    let persons = null;
    let btnClasses = [cssClasses.button]

    if(this.state.showPersons){
      persons = (
        <div>
            {this.state.person.map((person, index) => {
              return <Person 
                      click={ () => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id} 
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                      />
            })}
          </div>
      )
      // style.backgroundColor = 'red';
      btnClasses.push(cssClasses.red)
    }

    // let classes = ["red", "bold"].join(" ");
    let classes = [];
    if(this.state.person.length <= 2){
      classes.push(cssClasses.red);
    }
    if(this.state.person.length <= 1){
      classes.push(cssClasses.bold)
    }
    return (
      <div className={cssClasses.App}>
        <h1>WELCOME</h1>
        <p className={classes.join(' ')}>Look at this HTML, but actually this is a JSX</p>
        <button
          className={btnClasses.join(' ')}
          onClick={this.togglePersonHandler}>Switch Name
        </button>
          {persons}
      </div>
    );
  }
}

export default App;

// const app = props =>  {
  
//   const [ personState, setPersonState ] = useState({
//       person:[
//         {name: 'Jane', age: 24},
//         {name: 'Josh', age: 26},
//         {name: 'Ali', age: 22}
//       ],
//       otherState: 'some other value'
//   });

//   const switchNameHandler = () =>{
//     setPersonState({person: 
//       [
//         {name: 'John', age: 24},
//         {name: 'Josh', age: 26},
//         {name: 'Ali', age: 22}
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>WELCOME</h1>
//       <p>Look at this HTML, but actually this is a JSX</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personState.person[0].name} age={personState.person[0].age}/>
//       <Person name={personState.person[1].name} age={personState.person[1].age}>My Hobbies: reading</Person>
//       <Person name={personState.person[2].name} age={personState.person[2].age}/>
//     </div>
//   );  
// }

// export default app;