import React from 'react';
import styled from 'styled-components';
import BasicModal, {BasicModalProp} from './BasicModal';

export interface ConfirmModalProp extends BasicModalProp {
  content: string;
  closeModal: () => void;
  onConfirm: () => void;
}

export default function ConfirmModal({closeModal, onConfirm, content, ...rest}: ConfirmModalProp) {
  
  return (
      <Wrap {...rest}>
        <Content>{content}</Content>
        <ButtonWrap>
          <Button onClick={closeModal}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>
            Confirm
          </Button>
        </ButtonWrap>
      </Wrap>
  );
}

const Wrap = styled(BasicModal)`
  width: 90%;
  max-width: 500px;
`;

const Content = styled.span`
  display: block;
  padding: 20px;
`;

const Button = styled.button`
  padding: 5px 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
