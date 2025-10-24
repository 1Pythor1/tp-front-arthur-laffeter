import type { User } from "../../Core/Data/User";
import './UserCardFull.css'

export function UserCardFull(user: User) {
    return (        
            <div className="user-card-full" key={user.id}>
                <div id="user-card-info">                    
                    <img src={user.image} alt={user.firstName}/>
                    <h2>Infos</h2>
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                    <p>{user.email}</p>
                </div>                
                <div id="user-card-details">
                    <h2>Details</h2>
                    <p>Age: {user.age}</p>
                    <p>Birth Date: {user.birthDate.getDate()}</p>
                    <p>Phone Number: {user.phone}</p>
                    <p>Etc..</p>
                </div>                
            </div>        
    );
}