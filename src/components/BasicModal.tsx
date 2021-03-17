import React, {ComponentProps} from 'react';
import styled from 'styled-components';

export interface BasicModalProp extends Omit<ComponentProps<'div'>, 'ref'> {
  visible: boolean;
}

export default function BasicModal({visible, ...rest}: BasicModalProp) {
  
  return (
      <Wrap className={visible ? 'visible' : ''}>
        <InnerWrap {...rest}/>
      </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 1000;
  
  &.visible {
    display: flex;
  }
`;

const InnerWrap = styled.div`
  margin: auto;
  background-color: white;
`;
