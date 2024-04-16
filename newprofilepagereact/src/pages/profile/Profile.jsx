import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./profile.css"

export default function Profile() {
    return(
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                        </div>
                        <div className="profileCoverImg">

                        </div>
                        <div className="profileUserImg">

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">name</h4>
                            <span className="profileInfoDesc">description</span>
                        </div>
                    </div>
                    <div className="profileRightBottom"></div>
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </>
    )
}