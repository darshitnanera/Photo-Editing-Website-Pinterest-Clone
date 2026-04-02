import './postIntaractions.css';
import Image from '../image/image'

const PostIntaractions = () =>{
    return (
        <div className="postIntaractions">
            <div className="interactionItems">
                <Image path="/general/react.svg" alt=""/>
                273
                <Image path="/general/share.svg" alt=""/>
                <Image path="/general/more.svg" alt=""/>
                <button>Save</button>
            </div>
        </div>
    )
}

export default PostIntaractions