import {baseUrl} from './base_url';
import {redirect} from 'react-router-dom';

const authCheck =  () => {
    const loggedIn = localStorage.getItem('loggedIn')
    if(!loggedIn){
        return false
    }
    return true
}

export const moviesLoader = async () => {

    if (!authCheck()){
        return redirect('/login')
    }

    const response = await fetch(`${baseUrl}/movies`, {
        credentials: 'include'
    })
    const movies = await response.json()
    return movies
}

export const movieLoader = async ({params}) => {

    if (!authCheck()){
        return redirect('/login')
    }

    const id = params.id
    const response = await fetch(`${baseUrl}/movies/${id}`,{
        credentials: 'include'
    })
    const movie = await response.json()
    return movie
}

export const mainLoader = async () => {
    if(authCheck()){
        return redirect("/dashboard")
    }
    return {}
}