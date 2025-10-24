import type { User } from "../../Core/Data/User";
import './UserCard.css'

export function UserCard(user: User) {
    return (        
            <div className="user-card" key={user.id}>                
                <img src={user.image} alt={user.firstName}/>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
            </div>        
    );
}