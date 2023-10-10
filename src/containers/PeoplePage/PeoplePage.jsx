import React from 'react'
import PropTypes from 'prop-types'

import PeopleList from '@components/PeoplePage/PeopleList'
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation'

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResourse } from '@utils/network'
import { API_PEOPLE } from '@constants/api'
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData'
import { useQueryParams } from '@hooks/useQueryParams'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = React.useState(null)
    const [prevPage, setPrevPage] = React.useState(null)
    const [nextPage,setNextPage] = React.useState(null)
    const [counterPage,setCounterPage] = React.useState(1)

    const query = useQueryParams()
    const queryParams = query.get('page')

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

            setPrevPage(res.previous)
            setNextPage(res.next)
            setCounterPage(getPeoplePageId(url))

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }


    }

    React.useEffect(() => {
        getResourse(API_PEOPLE + queryParams)
    }, [])
    
    return (
        <>
            <PeopleNavigation
                getResourse = {getResourse}
                prevPage = {prevPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
            />
            { people && <PeopleList people = {people}/> }               
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage)