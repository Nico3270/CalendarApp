import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { AppRouter } from "./router/AppRouter"


export const Calendar = () => {
    return (
        <>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </>
    )
}