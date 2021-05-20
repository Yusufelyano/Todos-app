import {useState} from "react";
import Header from "./Header.js";
import Form from "./Form.js";
import Todos from "./Todos.js";

function App() {
const [text, setText] = useState("") 
const [todos, setTodos] = useState(
  [
    {
      text: "Купить бананы",
      favorite: false,
    },
    {
      text: "Продать квартиру",
      favorite: false,
    },
    {
      text: "Выучить уроки по JS",
      favorite: false,
    },
  ]
)
const deleteTodos = (i) => {
  const filterTodos = todos.filter((item, index)=>{
    if(index === i){
      return false  
    }
      return true
  })
  setTodos(filterTodos)
};
const makeFavorite = (i) =>{
const NewTodos = todos.map((item, index) => {
  if(i===index){
    return{
      ...item,
      favorite: !item.favorite
    } 
  }
  return item
});
setTodos(NewTodos)
}
const addTodo = () => {
  setTodos([...todos,{
    text: text,
    favorite: false
  }])
}
  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos todos={todos} makeFavorite={makeFavorite} deleteTodos={deleteTodos}/>
    </div>
  );
}

export default App;
