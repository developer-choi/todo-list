import styled from 'styled-components';
import Todo, {TodoItem} from './components/Todo';
import TodoInput from './components/TodoInput';
import {useCallback, useState} from 'react';
import ConfirmModal from './components/ConfirmModal';

/**
 * 리스트에서 삭제모달의 confirm버튼의 클릭콜백함수까지 pk를 전달하는 예제를 구현함.
 * 모달 띄우기전에 confirm버튼 콜백함수를 만드는 방법으로 만들었음.
 */
export default function SecondApp() {
  
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const onCreate = useCallback((content: string) => {
    setTodos(prevState => prevState.concat({content, pk: new Date().getTime()}));
  }, []);
  
  const [modalState, setModalState] = useState<{visible: boolean, onConfirm: () => void}>(INITIAL_STATE);
  
  const closeModal = useCallback(() => {
    setModalState(INITIAL_STATE);
  }, []);
  
  const openModal = useCallback((deleteTodoId: number) => {
    setModalState({
      visible: true,
      onConfirm: () => {
        setTodos(prevState => prevState.filter((item) => item.pk !== deleteTodoId));
        closeModal();
      }
    });
  }, [closeModal]);
  
  return (
      <>
        <Wrap>
          <Title>Todo List</Title>
          <TodoInput onCreate={onCreate}/>
          {todos.map(({pk, content}) => (
              <Todo key={pk} pk={pk} content={content} onDelete={openModal}/>
          ))}
        </Wrap>
        <ConfirmModal {...modalState} closeModal={closeModal} content="해당 Todo를 삭제하시겠습니까?"/>
      </>
  );
}

const INITIAL_STATE = {
  visible: false,
  onConfirm: () => {}
};

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
