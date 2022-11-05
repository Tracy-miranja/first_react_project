import Todos from './components/Todos.js';
 
function App() {
  return( <div>
    <div>MY TODOS LIST</div>
   <Todos text='master room painting'/>
   <Todos text='dinning room re-painting'/>
   <Todos text='corridor painting'/>
   
  </div>
  );
}

export default App;
