import styled from 'styled-components';
import Todo, {TodoItem} from './components/Todo';
import TodoInput from './components/TodoInput';
import {useCallback, useState} from 'react';
import ConfirmModal from './components/ConfirmModal';

/**
 * 리스트에서 삭제모달의 confirm버튼의 클릭콜백함수까지 pk를 전달하는 예제를 구현함.
 * 모달 띄우기전에 삭제할 pk를 저장하는 방법으로 구현하였음.
 */
export default function App() {
  
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [deleteTodoId, setDeleteTodoId] = useState<number>();
  
  const onCreate = useCallback((content: string) => {
    setTodos(prevState => prevState.concat({content, pk: new Date().getTime()}));
  }, []);
  
  const [visible, setVisible] = useState(false);
  const openModal = useCallback((pk: number) => {
    setDeleteTodoId(pk);
    setVisible(true);
  }, []);
  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);
  
  const onConfirm = useCallback(() => {
    //이 함수가 실행됬을 때 deleteTodoId가 없었음.
    setTodos(prevState => prevState.filter((item) => item.pk !== deleteTodoId));
    closeModal();
  }, [deleteTodoId, closeModal]);
  
  return (
      <>
        <Wrap>
          <Title>Todo List</Title>
          <TodoInput onCreate={onCreate}/>
          {todos.map(({pk, content}) => (
              <Todo key={pk} pk={pk} content={content} onDelete={openModal}/>
          ))}
        </Wrap>
        <ConfirmModal visible={visible} closeModal={closeModal} onConfirm={onConfirm} content="해당 Todo를 삭제하시겠습니까?"/>
      </>
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
