import TodoItem from "./todoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const List = ({ setTodoList, todoList, filter }) => {
  const deleteItem = (item) => {
    setTodoList(todoList.filter((task) => task.data !== item.data));
  };

  const markCompleted = (item) => {
    setTodoList(
      todoList.map((task) => {
        if (task.data === item.data) {
          return { ...task, completed: !item.completed };
        }
        return task;
      })
    );
  };

  const handleOnDrag = (result) => {
    const items = [...todoList];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodoList(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDrag}>
      <Droppable droppableId="List">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todoList.length ? (
              //filter the data then map through the tasks to render them
              todoList
                .filter((task) => {
                  if (filter === "Completed") return task.completed;
                  else if (filter === "Active") return !task.completed;
                  else return true;
                })
                .map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <TodoItem
                        provided={provided}
                        deleteItem={deleteItem}
                        markCompleted={markCompleted}
                        item={item}
                      ></TodoItem>
                    )}
                  </Draggable>
                ))
            ) : (
              <li className="capitalize text-center p-5">the list is empty</li>
            )}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
