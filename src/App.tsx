//import Message from './message';
import ListGroup from './components/ListGroup';
import Alert from './components/alert';
function App(){

  let listOfItems = [
    'Japan',
    'China',
    'Kenya',
    'United-States'
]
  const handleSelectItem = (item: string) =>{console.log(item);}

  return (
  <div> <ListGroup listOfItems={listOfItems} heading='Cities' onSelectItem={handleSelectItem}></ListGroup><Alert></Alert></div>
  
  )
  

}

export default App;