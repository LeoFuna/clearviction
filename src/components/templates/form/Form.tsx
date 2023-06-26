'use client';
import { useRef } from 'react';
import Button from '../button/Button';
import TextInput from '../input/TextInput/TextInput';
import styles from './Form.module.css';

export interface IForm {}

function Form(_props: IForm) {
  const emailRef = useRef('');
  const githubRepositoryUrlRef = useRef('');

  return (
    <div className={styles.form}>
      {/* {!!router?.query?.error && <p className="text-red-600 text-center">!! Usuário ou senha inválidos !!</p>} */}
      <TextInput inputRef={emailRef} label="Email" type="email" />
      <TextInput
        inputRef={githubRepositoryUrlRef}
        label="Repository Url"
        type="text"
      />
      <Button
        label="Subscribe"
        type="submit"
        onClick={() => console.log('Sou o sbscribe')}
      />
      <Button label="Clear" onClick={() => console.log('sou o Clear')} />
    </div>
  );
}

export default Form;
