import React, {ChangeEvent, ComponentProps, useCallback, KeyboardEvent} from 'react';

export interface InputExtendProp extends Omit<ComponentProps<'input'>, 'ref'> {
  onChangeText?: (text: string) => void;
  onEnter?: () => void;
}

export default function InputExtend({onChange, onChangeText, onEnter, onKeyDown, ...rest}: InputExtendProp) {
  const _onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    onChangeText?.(event.target.value);
  }, [onChange, onChangeText]);
  
  const _onKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter?.();
    }
    onKeyDown?.(event);
  }, [onKeyDown, onEnter]);
  
  return (
      <input onChange={_onChange} onKeyDown={_onKeyDown} {...rest}/>
  );
}
