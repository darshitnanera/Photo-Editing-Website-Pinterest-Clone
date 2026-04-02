import './galleryitem.css';
import { Link } from "react-router";
import Image from '../image/image';
const Galleryitem = ({ item }) => {
    const optimizeHeight = (372 * item.height) / item.width
    return (
        <div
            className="galleryitem"
            style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
        >
            {/* <img src={item.media} alt="" /> */}
            <Image path={item.media} alt="" w = {372} h={optimizeHeight}/>
            <Link to={`/pin/${item.id}`} className="overlay"></Link> {/* ✅ Fixed template literal */}
            <button className='saveButton'>Save</button>
            <div className="overlayIcons">
                <button>
                    <Image path="/general/share.svg" alt="" />
                </button>
                <button>
                    <Image path="/general/more.svg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default Galleryitem;
