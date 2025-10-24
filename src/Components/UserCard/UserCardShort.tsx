import type { User } from "../../Core/Data/User";
import { Link } from "react-router-dom";
import './UserCardShort.css'

export function UserCardShort(user: User) {
    return (
        <Link key={user.id} to={`/user/${user.id}`}>
            <div className="user-card" key={user.id}>                
                <img src={user.image} alt={user.firstName}/>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
            </div>    
        </Link>    
    );
}