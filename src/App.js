import React from 'react';
import Characters from "./components/Characters";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {

  state = {
    charactersList: characters,
    score: 0,
    topScore: 0,
    selectedCharactersListIds: []
  }

  //Shuffle the Avengers card before loading a game
  shuffleCharacters = () => {
    return this.state.charactersList.sort(() => 0.5 - Math.random());
  };


  //Function that triggeres when user selects a particular character
  handleSelectedCharacter = (characterId) => {

    console.log("Inside handleSelectedCharacter()");
    console.log("characterId: " + characterId);
    console.log("selectedCharactersListIds: " + this.state.selectedCharactersListIds);


    //If selected character id is in the array that means it has already been selected by the user
    if(this.state.selectedCharactersListIds.includes(characterId)) {
      console.log("Character id=" + characterId + " has already been selected.");

      //Reset values
      this.setState({
        topScore: this.state.score, //Update topScore value to the latest score
        score: 0, //Reset score to 0,
        characterList: this.shuffleCharacters(),
        selectedCharactersListIds: [] //Reset selected character id array
      });

    } else {

      //push selected character id to array to be referenced later
      const newSelectedCharArray = this.state.selectedCharactersListIds;
      newSelectedCharArray.push(characterId);

      this.setState({
        selectedCharactersListIds: newSelectedCharArray,
        characterList: this.shuffleCharacters(),
        score: this.state.score + 1 //Increment score by 1
      });

      // console.log("Character id=" + characterId + " is now added to the array.");
      // console.log("selectedCharactersListIds: " + this.state.selectedCharactersListIds);

    }
  }


  render() {

    return (
      <div>
        <header className="jumbotron jumbotron-fluid">

          <div class="d-flex flex-wrap align-content-center cHeading"
            style={{
              backgroundImage: `url("./images/AvengersBgImg.jpg")`,
              height:'300px'
            }}
            >
            <h1>Clicky Game</h1>
            <h2>Select a unique Avenger each time!</h2>
          </div>
          
          <div className="cScoreCard">
            <h3>Score: {this.state.score} | Top-Score: {this.state.topScore}</h3>
          </div>
        
        </header>
        


        <Wrapper>
          {
            this.state.charactersList.map(character => {
              return (
                <Characters
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  handleSelectedCharacter={this.handleSelectedCharacter}
                />
              );
            })
          }
        </Wrapper>

      </div>
    );
  }

}



export default App;
