
import "./Sidebar.css";

const Sidebar = ({onFilter}) =>{
    return (
        <div className ="sidebar">
            <button  className ="button" onClick = {() => onFilter("home")}>Home</button>
            <button className ="button" onClick = {() => onFilter("liked")}>Favorites</button>
            <button  className ="button" onClick = {() => onFilter("watched")}>Watched</button>
        </div>
    )
}

export default Sidebar;

