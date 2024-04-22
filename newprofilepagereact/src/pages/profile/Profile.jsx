import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import "./profile.css"
import Background from "../../components/assets/background.jpg"
import Person from "../../components/assets/defaultAvatar.jpg"


export default function Profile() {
    return(
        <>
            <Topbar className="topbar"/>
            <div className="profile">
                <Sidebar className="sidebar"/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <img className="profileCoverImg" src = {Background} alt=""/>
                        <img className="profileUserImg" src = {Person} alt=""/>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">name</h4>
                            <span className="profileInfoDesc">description</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed className="feed"/>
                    </div>
                </div>   
            </div>
        </>
    )
}