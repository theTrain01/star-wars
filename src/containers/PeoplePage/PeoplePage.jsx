import React from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResourse } from '@utils/network'
import { API_PEOPLE } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'

import PeopleList from '@components/PeoplePage/PeopleList'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = React.useState(null)

    const getResourse = async (url) => {
        const res = await getApiResourse(url)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
    
                return {
                    id,
                    name, 
                    img
                }
            })
    
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }

    React.useEffect(() => {
        getResourse(API_PEOPLE)
    }, [])
    
    return (
        <>
            <h1 className='header__text'>Navigation</h1>
            { people && <PeopleList people = {people}/> }               
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)