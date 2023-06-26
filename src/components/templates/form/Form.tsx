'use client';
import { validateEmail } from '@/utils/regex.utils';
import { useRef, useState } from 'react';
import Alert from '../alert/Alert';
import Button from '../button/Button';
import TextInput from '../input/TextInput/TextInput';
import styles from './Form.module.css';

interface IValidateForm {
  email: string;
  githubRepoUrl: string;
}

const validateForm = ({ email, githubRepoUrl }: IValidateForm) => {
  if (!email.trim()) return 'Please email is required!';
  if (!githubRepoUrl.trim()) return 'Please repository url is required!';
  if (!validateEmail(email)) return 'Invalid email';
  return null;
};

function Form() {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  // Here I`m using useRef just because its a simple form and ref dont rerender on user type.
  // When using in a real project we have other better ways to handle forms, for example: using the react hook form lib.
  const emailRef = useRef('');
  const githubRepositoryUrlRef = useRef('');

  const onSubmit = () => {
    const alertMessage = validateForm({
      email: emailRef.current,
      githubRepoUrl: githubRepositoryUrlRef.current,
    });
    if (alertMessage) return alert(alertMessage);

    fetch(
      'https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailRef.current,
          githubRepoUrl: githubRepositoryUrlRef.current,
        }),
      }
    )
      .then((response) => response.json())
      .then(() => setOpenAlert(true))
      .catch((_error) => alert('Something went wrong...'));

    // Resetting inputs
    emailRef.current = '';
    githubRepositoryUrlRef.current = '';
  };

  return (
    <div className={styles.form}>
      <Alert
        message="Success!"
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
      />
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
