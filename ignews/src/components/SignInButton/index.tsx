import styles from './SignInButton.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton (){

    const userLoged = true;

    return userLoged ? 
    (
        <button type="button" className={styles.signInButton}>
        <FaGithub color='#04d361' />
        Nelson Mello
        <FiX color='#737380' className={styles.closeIcon} />
        </button>

    ) : (
        <button type="button" className={styles.signInButton}>
        <FaGithub color='#eba417' />
        Entrar com o github
        </button>
    )  

   




    
}