import { SWAPI_PEOPLE, SWAPI_ROOT, HTTPS, URL_IMG_PERSON, GUIDE_IMG_EXTENSION, SWAPI_PARM_PAGE } from "@constants/api"

export const getPeoplePageId = url => {
    const position = url.lastIndexOf(SWAPI_PARM_PAGE)

    const id = url.slice(position + SWAPI_PARM_PAGE.length)
    
    return Number(id)
}

const getId = (url, category) => {
    const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '')

    return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE) 

export const getPeopleImage = id => {
    return `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`
}