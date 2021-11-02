import './UserCard.css';
import UserLogo from '../UserLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
let UserCard = (props)=>{
    let {key,user,color,deleteHandler} = props;
    return(
    <div className='grid-item' key={key}>
        <div className='user-name'>
            <UserLogo user={user} color={color}/>
            {/* <div className="user-logo">{setBg}</div> */}
            <div className='username'>
                {user.fist_name} {user.last_name}
            </div>
        </div>
        <div className='User-Icons'>
            <button className='pen-icon'>
                <FontAwesomeIcon icon={faPen} />
            </button>
            <button
                className='trash-icon'
                onClick={() => deleteHandler(user.email)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </div>
    )
}

export default UserCard;

