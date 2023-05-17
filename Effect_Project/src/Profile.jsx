import { useEffect, useState } from "react";

function Profile(){

    const[user, setUser] = useState({login: '', avatar_url: ''});

    useEffect(() =>{
        fetch('https://api.github.com/users/Maria-Eduarda-Claro')
        .then((response) => response.json())
        .then((responseUserJson) => setUser (responseUserJson) )

    }, [])

    return(
        <main>
            {user.login}
            <img src={user.avatar_url}/>
            {user.company}
            {user.bio}
            {user.location}

        </main>
    )


}
export default Profile;