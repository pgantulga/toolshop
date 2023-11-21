import * as styles from './notFound.css'
import { Link } from 'react-router-dom'
import SubHeader from '../components/common/subheader'

const NotFound = () => {
    return (

        <div className='container'>
            <div className={styles.notFound}>
                <SubHeader
                    title='404'
                >
                    <Link to='/'>Oops, this page could not be found.</Link>

                </SubHeader>
            </div>
        </div>
    )
}

export default NotFound;