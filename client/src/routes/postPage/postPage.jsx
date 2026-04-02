import './postPage.css'
import Image from '../../components/image/image';
import PostIntaractions from '../../components/postInaractions/postInaractions';
import {Link} from "react-router";
import Comments from '../../components/comments/comments';

const PostPage = () => {
    return (

        <div className="postPage">
            <img src="/general/arrow1.png" alt=""/>
            <div className="postcontainer">
                <div className="postImage">
                    <Image path="/pins/pin1.jpeg" alt="" w={736}/>
                </div>
                <div className="postDetail">
                    <PostIntaractions/>
                    <Link to="/john" className='postUser'>
                    <Image path="/general/noAvatar.png" className=""/>
                    <span>John doe</span>
                    </Link>
                    <Comments/>
                </div>
            </div>
        </div>
    )
}
export default PostPage