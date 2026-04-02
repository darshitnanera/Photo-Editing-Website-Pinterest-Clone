import './comments.css';
import Image from '../image/image';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const Comments = () => {

    const [open , setOpen] = useState(false);
    return (
        <div className="comments">
            <div className="commentList">
                <span className='commentCount'>
                    {/* comment */}
                    <div className="comment">
                        <Image path="/general/noAvatar.png" alt="" />
                        <div className="commentContent">
                            <span className='commentUsername'>John doe</span>
                            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span className='commentTime'>1h</span>
                        </div>
                    </div>
                     {/* comment */}
                    <div className="comment">
                        <Image path="/general/noAvatar.png" alt="" />
                        <div className="commentContent">
                            <span className='commentUsername'>John doe</span>
                            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span className='commentTime'>1h</span>
                        </div>
                    </div>
                     {/* comment */}
                    <div className="comment">
                        <Image path="/general/noAvatar.png" alt="" />
                        <div className="commentContent">
                            <span className='commentUsername'>John doe</span>
                            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span className='commentTime'>1h</span>
                        </div>
                    </div>
                     {/* comment */}
                    <div className="comment">
                        <Image path="/general/noAvatar.png" alt="" />
                        <div className="commentContent">
                            <span className='commentUsername'>John doe</span>
                            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <span className='commentTime'>1h</span>
                        </div>
                    </div>
                </span>
            </div>
            <form className='commentForm'>
                <input type="text" name="" id="" placeholder='Add a comment' />
                <div className="emoji">
                    <div onClick={() => setOpen(prev=>!prev)}>
                        😌
                    </div>
                {open && <div className='emojiPicker'>
                    <EmojiPicker/>
                </div>}
                </div>
            </form>
        </div>
    )
}

export default Comments