import { MutableRefObject } from 'react';
import styles from './TextInput.module.css';

export interface ITextInput {
  label: string;
  inputRef: MutableRefObject<string>;
  type?: 'text' | 'email';
}

function TextInput({ label, inputRef, type = 'text' }: ITextInput) {
  return (
    <>
      <p className={styles.label}>{label}</p>
      <input
        onChange={(event) => (inputRef.current = event.target.value)}
        className={styles.input}
        type={type}
      />
    </>
  );
}

export default TextInput;
