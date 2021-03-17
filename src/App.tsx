import styled from 'styled-components';
import Todo, {TodoItem} from './components/Todo';
import TodoInput from './components/TodoInput';
import {useCallback, useState} from 'react';

export default function App() {
  
  const [todos, setTodos] = useState<TodoItem[]>([]);
  
  const onCreate = useCallback((content: string) => {
    setTodos(prevState => prevState.concat({content, pk: new Date().getTime()}));
  }, []);
  
  const onDelete = useCallback((pk: number) => {
    setTodos(prevState => prevState.filter((item) => item.pk !== pk));
  }, []);
  
  return (
      <Wrap>
        <Title>Todo List</Title>
        <TodoInput onCreate={onCreate}/>
        {todos.map(({pk, content}) => (
            <Todo key={pk} pk={pk} content={content} onDelete={onDelete}/>
        ))}
      </Wrap>
  );
}

const Wrap = styled.div`
  margin: 100px auto 0 auto;
  width: 40%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;
