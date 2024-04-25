import "./topbar.css";
import {Search} from "@mui/icons-material" ;

export default function Topbar() {
return (
<div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">Double Fugue</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search" className="searchInput"/>
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">About Double Fugue</span>
            <span className="topbarLink">FAQ</span>
            <span className="topbarLink" >Home</span>
        </div>
    </div>
</div>
)
}