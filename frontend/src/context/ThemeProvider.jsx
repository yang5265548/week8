import { useState } from "react";
import ThemeContext from "./ThemeContext";
const ThemeProvider=({children})=>{
    const [isDarkMode,setIsDarkMode]=useState(false);
    const toggleTheme=()=>{
        setIsDarkMode((preMode)=>!preMode);

    };

    const theme={
        backgroundColor:isDarkMode?'#f1356d':'#FFF',
        color:isDarkMode?'#FFF':'#000',
        toggleTheme,
    }
    return(
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;