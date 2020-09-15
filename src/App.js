import React from 'react';
import { CardList } from './Component/card-list/card-list.component';
import './App.css';
import Filter from '../src/Component/filter/filter.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spaceDetails: [],
    }
  }

  componentDidMount() {
    fetch('https://api.spaceXdata.com/v3/launches?limit=100')
      .then(response => response.json())
        .then(details => this.setState({ spaceDetails: details }
      ))
  }

  handleFilterSelection = (event,lbl) => {
   lbl === 'Launch Year' ? 
      fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${event}`)
         .then(response => response.json())
          .then(details => this.setState({ spaceDetails: details }
        )) : 

    (lbl === 'Successful Launch') ? 
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${event}`)
     .then(response => response.json())
        .then(details => this.setState({ spaceDetails: details }
      )) :
      fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${event}&land_success=${event}`)
      .then(response => response.json())
        .then(details => this.setState({ spaceDetails: details }
      ))
  }

  render() {
    const {spaceDetails}= this.state;
    const developer_name = 'Himanee';
    
    return (
      <div className="App">       
          <header className='App-header'>SpaceX Launch Programs</header>
          <Filter handleFilterSelection={this.handleFilterSelection}></Filter>
          <CardList spaceDetails = {spaceDetails}></CardList>
          <footer className='App-footer'>Developed by : {developer_name}</footer>
      </div>
    );
  }

}

export default App;
