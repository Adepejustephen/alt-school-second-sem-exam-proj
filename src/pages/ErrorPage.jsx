
import { FetchUser } from '../hooks'

export const ErrorPage = () => {
    const {user } = FetchUser()
    
    
    return (
        <div>{user}</div>)

}
