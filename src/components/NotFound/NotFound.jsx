import { useLocation } from 'react-router-dom'
import img from './img/not-found.png'

import styles from './NotFound.module.css'

const NotFound = () => {
    let location = useLocation()

    return(
        <>
            <img className = {styles.img} src={img} alt="Not Found" />
            <p className = {styles.text} >No math for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFound