import styles from './Button.module.css';

export interface IButton {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  onClick: () => void;
}

function Button({ label, type = 'button', onClick }: IButton) {
  return (
    <button className={styles[type]} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
