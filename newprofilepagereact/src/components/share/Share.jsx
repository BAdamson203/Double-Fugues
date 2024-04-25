import "./share.css";
import {Label} from "@mui/icons-material";
import Person from  "../../components/assets/defaultAvatar.jpg";


export default function Share() {
    return(
        <div>
            {/*shareBox is required because box won't show up 
            correctly if share is formatted and to allow to format within shareWrapper*/}
            <div className="shareBox"> 
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src={Person} alt="" />
                        <input 
                            placeholder="input" 
                            className="shareInput"
                        />
                    </div>
                    <hr className="shareHr"/>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            {/* shareOption is current placeholder for tag system */}
                            <div className="shareOption">
                                <Label className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>
                            <div className="shareOption">
                                <Label className="shareIcon"/>
                                <span className="shareOptionText">Tag</span>
                            </div>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}