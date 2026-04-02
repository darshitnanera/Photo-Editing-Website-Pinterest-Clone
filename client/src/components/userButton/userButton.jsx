import './userButton.css'
import {useState} from "react";
import Image from '../image/image';

const UserButton = () => {

    const [open, setOpen] = useState(false)
    const currentUser = true

    return currentUser ? (
        <div className="userButton">
            <Image path="/general/noAvatar.png" alt="" />
            <Image
            onClick={() => setOpen((prev) => !prev)}
            path="/general/arrow.svg" alt="" className='arrow'/>

            { open && (<div className='userOptions'>
                <div className="useroption">Profile</div>
                <div className="useroption">Setting</div>
                <div className="useroption">Logout</div>
            </div>
            )}
        </div>
    ) : (<a href='/' className='loginlink'>Login / Sign up</a>)
}
export default UserButton