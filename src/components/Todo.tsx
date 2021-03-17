import React, {useCallback} from 'react';
import styled from 'styled-components';

export interface TodoItem {
  pk: number;
  content: string;
}

export interface TodoProp extends TodoItem {
  onDelete: (pk: number) => void;
}

export default function Todo({content, pk, onDelete}: TodoProp) {
  
  const _onDelete = useCallback(() => {
    onDelete(pk);
  }, [pk, onDelete]);
  
  return (
      <Wrap>
        <Content>{content}</Content>
        <DeleteButton onClick={_onDelete}>X</DeleteButton>
      </Wrap>
  );
};

const Wrap = styled.ul`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const Content = styled.li`

`;

const DeleteButton = styled.button`
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`;
