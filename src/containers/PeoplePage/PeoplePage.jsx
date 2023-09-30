import React from 'react'
import { getApiResourse } from '../../utils/network'
import { API_PEOPLE } from '../../constants/api'
import { getPeopleId } from '../../services/getPeopleData'
import styles from './PeoplePage.module.css'

const PeoplePage = () => {
    const [people, setPeople] = React.useState(null)

    const getResourse = async (url) => {
        const res = await getApiResourse(url)

        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url)
            console.log(id)

            return {
                name, 
                url
            }
        })

        setPeople(peopleList)
    }

    React.useEffect(() => {
        getResourse(API_PEOPLE)
    }, [])
    
    return (
        <>
            {
                people && (
                    <ul>
                        {
                            people.map(({name, url}) => (
                                <li key = {name}>{name}</li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )
}

export default PeoplePage