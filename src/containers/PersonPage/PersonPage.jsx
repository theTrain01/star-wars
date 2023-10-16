import React from 'react'
import { useParams } from 'react-router'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getApiResourse } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { getPeopleImage } from '@services/getPeopleData'

import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'

import styles from './PersonPage.module.css'

const PersonPage = ({setErrorApi}) => {
    const [personInfo, setPersonInfo] = React.useState(null)
    const [personName, setPersonName] = React.useState(null)
    const [personPhoto, setPersonPhoto] = React.useState(null)

    const { id } = useParams()

    React.useEffect(() => {
        (async () => {
            const res = await getApiResourse(`${API_PERSON}/${id}`)
            
            if (res) {

                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Gender', data: res.gender}
                ])

                setPersonPhoto(getPeopleImage(id))
                setPersonName(res.name)

                // res.films

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto = {personPhoto}
                        personName = {personName}
                    />

                    {personInfo && <PersonInfo personInfo = {personInfo}/>}
                </div>
                
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,

}

export default withErrorApi(PersonPage);