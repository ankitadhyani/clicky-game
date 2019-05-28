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

  //SHUFFLE CARDS
  shuffleCharacters = () => {
    const shuffledCharacterList = this.state.charactersList.sort(() => 0.5 - Math.random());

    this.setState({
      charactersList: shuffledCharacterList
    });
  };



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
        score: 0, //Reset score to 0
        selectedCharactersListIds: [] //Reset selected character id array
      });

    } else {

      //push selected character id to array to be referenced later
      const newSelectedCharArray = this.state.selectedCharactersListIds;
      newSelectedCharArray.push(characterId);

      this.setState({
        selectedCharactersListIds: newSelectedCharArray,
        score: this.state.score + 1 //Increment score by 1
      });

      console.log("Character id=" + characterId + " is now added to the array.");
      console.log("selectedCharactersListIds: " + this.state.selectedCharactersListIds);

    }
  }


  render() {

    return (
      <div>
        <div>
          <h1>Clicky Game</h1>
          <h1>Select a unique Avenger each time!</h1>
          <h3>Score:{this.state.score} | Top Score:{this.state.topScore}</h3>
        </div>
        
          {/* {
            this.shuffleCharacters()
          } */}
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
