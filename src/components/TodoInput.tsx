import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import FormExtend from './FormExtend';
import InputExtend from './InputExtend';

export interface TodoInputProp {
  onCreate: (content: string) => void;
}

export default function TodoInput({onCreate}: TodoInputProp) {
  
  const [value, setValue] = useState('');
  
  const onSubmit = useCallback(() => {
    if (value.length > 0) {
      setValue('');
      onCreate(value);
    }
  }, [value, onCreate]);
  
  return (
      <Wrap>
        <StyledInput onChangeText={setValue} value={value}/>
        <Button onClick={onSubmit} type="submit">등록</Button>
      </Wrap>
  );
}

const Wrap = styled(FormExtend)`
  display: flex;
`;

const Button = styled.button`
  background-color: lightcoral;
  border-radius: 5px;
  padding: 8px 20px;
  color: white;
`;

const StyledInput = styled(InputExtend)`
  padding: 10px;
  border: 1px solid lightcoral;
  border-radius: 5px;
  flex-grow: 1;
  margin-right: 10px;
`;
