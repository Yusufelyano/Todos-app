import Todo from "./Todo.js"
function Todos(props){
   return(
      <div className="todos">
         {props.todos.map((item, index)=>{
          return(
             <Todo 
             key={index}
             item={item}
              index={index}
               makeFavorite={props.makeFavorite}
                deleteTodos={props.deleteTodos}
                />
  )
})
}
      </div>
   )
}
export default Todos;