import './profilePage.css'
import Image from '../../components/image/image'
import { useState } from 'react'
import Gallery from "../../components/gallery/gallery";
import Collection from "../../components/collections/collections";
const ProfilePage = () => {
    const [type , setType] = useState("Saved");
    return (
        <div className="profilePage">
            <Image
            className="profileImage"
            w={100}
            h={100}
            path="/general/noAvatar.png"
            alt=""
            />
            
            <h1 className='profileName'>John Doe</h1>
            <span className='profileUsername'>@johndoe</span>
            <div className='followerCounts'>10 followers . 20 followings</div>
            <div className='profileInteractions'>
                <Image path="/general/share.svg"/>
                <div className='profileButtons'>
                <button>Message</button>
                <button>Follow</button>
                </div>
                <Image path="/general/more.svg"/>

            </div>
            <div className='profileOptions'>
                <span onClick={() => setType("created")} className={type === "created" ? "active" :""}>create</span>
                <span onClick={() => setType("saved")} className={type === "saved" ? "active" :""}>Saved</span>
            </div>
            {type==="created" ? <Gallery/> : <Collection/>}
        </div>
    )
}
export default ProfilePage