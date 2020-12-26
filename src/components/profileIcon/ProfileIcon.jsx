import './ProfileIcon.css';

function ProfileIcon( props ){
    const { img , radius , size } = props;
    let haveProfile = false; 

    ( ( img === undefined ) ? haveProfile = false : haveProfile = true );

    const style = { width: size[0],
                    height: size[1],
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