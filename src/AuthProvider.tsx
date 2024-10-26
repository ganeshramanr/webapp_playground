
import { createContext, useState } from "react";


export const AuthContext = createContext<[String, Function]>(["", () => {}]); // create context with default value

export const AuthProvider = (props: any) => {
    const [user, setUser] = useState('');
    return (
        <AuthContext.Provider value={[user, setUser]} >
        {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
