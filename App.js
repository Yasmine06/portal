import React,{Component} from 'react';

import './App.css';
import './AppStyle.css';




import PureComp from './components/PureComp'
import ParComp from './components/ParComp';
import Portal from './components/Portal';

class App extends Component
{
  
   

  render()
  {
    return (
      <div className="App">
    
    <Portal/>
      </div>
    );
  }
}
  


export default App;
