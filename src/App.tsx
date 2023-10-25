//import Message from './message';
import ListGroup from './components/ListGroup';

function App(){

  let listOfItems = [
    'Japan',
    'China',
    'Kenya',
    'United-States'
]

  return <div> <ListGroup listOfItems={listOfItems} heading='Cities'></ListGroup></div>
  

}

export default App;