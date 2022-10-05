import styles from './SignInButton.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { signIn, signOut, useSession } from 'next-auth/react';


export function SignInButton (){

    const { data: session } = useSession();
 

    return session ? 
    (
        <button type="button" onClick={() => signOut()} className={styles.signInButton}>
        <FaGithub color='#04d361' />
        {session.user.name}
        <FiX color='#737380' className={styles.closeIcon} />
        </button>

    ) : (
        <button type="button" onClick={() => signIn('github')} className={styles.signInButton}>
        <FaGithub color='#eba417' />
        Entrar com o github
        </button>
    )  

   




    
}