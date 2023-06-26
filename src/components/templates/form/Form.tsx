'use client';
import { useRef } from 'react';
import Button from '../button/Button';
import TextInput from '../input/TextInput/TextInput';
import styles from './Form.module.css';

export interface IForm {}

function Form(_props: IForm) {
  const emailRef = useRef('');
  const githubRepositoryUrlRef = useRef('');

  const onSubmit = () => {
    if (!emailRef.current.trim()) return alert('Please email is required!');
    if (!githubRepositoryUrlRef.current.trim())
      return alert('Please repository url is required!');
  };

  return (
    <div className={styles.form}>
      {/* {!!router?.query?.error && <p className="text-red-600 text-center">!! Usuário ou senha inválidos !!</p>} */}
      <TextInput inputRef={emailRef} label="Email" type="email" />
      <TextInput
        inputRef={githubRepositoryUrlRef}
        label="Repository Url"
        type="text"
      />
      <Button label="Subscribe" type="submit" onClick={onSubmit} />
      <Button label="Clear" onClick={() => console.log('sou o Clear')} />
    </div>
  );
}

export default Form;
