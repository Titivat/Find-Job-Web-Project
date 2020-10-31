import './ProfileIcon.css';

function ProfileIcon( props ){
    const { img , radius } = props;
    let haveProfile = false; 

    ( ( img === undefined ) ? haveProfile = false : haveProfile = true );

    const style = { width: "78px",
                    height: "78px",
                    background: "#E5E5E5",
                    border: "1px solid black", 
                    borderRadius: radius,
                   }
    return(
        ( haveProfile ) ? 
            <img src={ img } style={ style } /> 
            : 
            <div style={ style } />
        
    );
}

export default ProfileIcon;