import styles from "./FormBox.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpotify} from '@fortawesome/free-brands-svg-icons'
import {useState} from "react";


const FormBox = () => {

    const [signType, setSignType] = useState('login')

    let signInClass = signType === 'login' ? styles.checked : ''
    let signUpClass = signType === 'login' ? '' : styles.checked

    return (
        <div className={styles.Container}>
            <div className={styles.LogoContainer}>
                <FontAwesomeIcon icon={faSpotify} size="4x" color="#1ed760"/>
                <span>Spotify</span>
            </div>
            <div className={styles.ButtonsContainer}>
                <button className={`${styles.InButton} ${signInClass}`} onClick={() => {
                    setSignType('login')
                }}>SIGN IN
                </button>
                <button className={`${styles.UpButton} ${signUpClass}`} onClick={() => {
                    setSignType('register')
                }}>SIGN UP
                </button>
            </div>
            <form className={signType === 'login' ? styles.LoginContainer : styles.LoginContainerHidden}>
                <div className={styles.FormBox}>
                    <input type="text" placeholder="Username" maxLength={30} required/>
                    <input type="password" placeholder="Password" maxLength={30} required/>
                    <div className={styles.CheckBox}>
                        <label>
                            <input type='checkbox'/>
                            <span className={styles.InputCheck}/>
                            Stay signed in
                        </label>
                    </div>
                    <button type="submit" className={styles.SignInButton}>SIGN IN
                    </button>
                    <button className={styles.Forgot} onClick={(event) => {
                        event.preventDefault()
                    }}>Forgot Password?
                    </button>
                </div>
            </form>
            <form className={signType !== 'login' ? styles.RegisterContainer : styles.RegisterContainerHidden}>
                <div className={styles.FormBox}>
                    <input type="text" placeholder="Username" maxLength={30} required/>
                    <input type="text" placeholder="Email" maxLength={30} required/>
                    <input type="password" placeholder="Password" maxLength={30} required/>
                    <div className={styles.CheckBox}>
                        <label>
                            <input type='checkbox'/>
                            <span className={styles.InputCheck}/>
                            Accept terms & privacy
                        </label>
                    </div>
                    <button type="submit" className={styles.SignInButton}>SIGN UP
                    </button>
                </div>
            </form>
        </div>
    )
}

export {FormBox};