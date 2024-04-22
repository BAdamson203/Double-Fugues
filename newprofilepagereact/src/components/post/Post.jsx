import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
    return(
        <div className="post">
            <div className="postWrapper">
                {/* profile pic, date */}
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="" alt=""/>
                        <span className="postUsername">User Name</span>
                        {/* may not end up being implemented */}
                        <span className="postDate"></span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter"></div>
                <div className="postBottom"></div>
            </div>
            
        </div>
    )
}