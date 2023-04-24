import s from './Loader.module.css'
import {CircularProgress} from "@mui/material";

export const Loader = () => {
    return (
            <div className={s.loader}>
                крутилка :)
                    <CircularProgress color="inherit" />
            </div>


    )
}

