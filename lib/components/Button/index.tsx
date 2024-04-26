import styles from './styles.module.css';

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button className={styles.button} {...props} />;
