import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import UiButton from '@UI/UiButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({getResourse, prevPage, nextPage, counterPage}) => {
    const handleChangePrev = () => {getResourse(prevPage)}
    const handleChangeNext = () => {getResourse(nextPage)}
    return (
        <div className={styles.container}>
            <Link to = {`/people/?page=${counterPage - 1}`} className={styles.buttons}>
                <UiButton
                    text = 'Previous'
                    onClick = {handleChangePrev}    
                    disabled = {!prevPage}            
                />
            </Link>

            <Link to = {`/people/?page=${counterPage + 1}`} className={styles.buttons}>
                <UiButton
                    text = 'Next'
                    onClick = {handleChangeNext}    
                    disabled = {!nextPage}            
                />
            </Link>
        </div>
    )
}


PeopleNavigation.propTypes = {
    getResourse: PropTypes.func,
    prevPage: PropTypes.string, 
    nextPage: PropTypes.string, 
    counterPage: PropTypes.number
}

export default PeopleNavigation