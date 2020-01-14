import React, {Component} from 'react';
import './App.css';
// import  Radium, {StyleRoot}from 'radium' ;
import './Person/Person.css'
import Person from "./Person/Person";
class App extends Component {
    state  ={
        persons:[
            {id: 'm28',name:'Max', age: 28 },
            {id: 'j35',name: 'juwLLLon', age: 35},
            {id: 's54', name:'Scoolj', age: 54},
            {id: 'm78', name:'manu', age:78}

        ],

        otherState: 'some other value',
        showPersons: false
    }


    nameChangedHandler=(event, id)=>{
        const personIndex = this.state.persons.findIndex( p =>{
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // alternative ..
        // const person = object.assign{}, this.state.persons[personIndex];

         person.name = event.target.value;

        const persons =[...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })

    }

    deletePersonHandler = (personIndex)=>{
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons});
    }


    togglePersonHandler =() => {
        const doesShow= this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    render() {
        const style ={
            backgroundColor :'green',
            color: 'white',
            font: 'inherit',
            border: '1x solid blue ',
            padding: '8px',
            cursor: 'pointer',
            // ':hover':{
            //     backgroundColor:'salmon',
            //     color:'black'
            //
            // }
        };

        let persons = null;

        if (this.state.showPersons){
            persons = (

                    <div  >
                        { this.state.persons.map((persons,index) =>{
                            return <Person
                                click = {() => this.deletePersonHandler(index)}
                                name={persons.name}
                                age={persons.age}
                                key = {persons.id}
                                changed = {(event) => this.nameChangedHandler(event, persons.id)}/>

                        })}
                    </div>


            );
            style.backgroundColor ='red';
            style[':hover']= {
                backgroundColor:'lightyellow',
                color:'black'

            }
        }

        let  classes = [];
        if (this.state.persons.length<=2){
            classes.push('red'); // classes = ['red]

        }
        if (this.state.persons.length <=1){
            classes.push('bold'); // classes =['red','bold']
        }
        //if (this.state.persons.length<=3){
          //  classes.push('bold','red');
        //}
        return (
            // <StyleRoot>
            <div className="App">
                <h1>Hi GUys REact!!!!</h1>
                <p className={classes.join()}>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle persons</button>
                     {persons}
            </div>
            // </StyleRoot>
        );
    }
}

export default App;
