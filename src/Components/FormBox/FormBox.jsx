import styles from "./FormBox.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'


const FormBox=()=>{
    return(
        <div className={styles.Container}>
            <div className={styles.LogoContainer}>
                <FontAwesomeIcon icon={faSpotify} size="4x" color="#1ed760"/>
                <span>Spotify</span>
            </div>
            <div className={styles.ButtonsContainer}>
                <button>SIGN IN</button>
                <button>SIGN UP</button>
            </div>
            <div className={styles.FormContainer}>
                <div className={styles.FormBox}>
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <div className={styles.CheckBox}>
                        <label>
                            <input type='checkbox'/>
                            <span className={styles.InputCheck}/>
                            stay signed in
                        </label>
                    </div>
                    <button>SIGN IN</button>
                    <button>Forgot Password?</button>
                </div>
            </div>
        </div>
    )
}

export {FormBox};