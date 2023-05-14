import { MainPage } from "@/pages/MainPage";
import { SliderPage } from "@/pages/SliderPage";
import { TablePage } from "@/pages/TablePage";
import { Route, Routes } from "react-router-dom";

export function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<MainPage />}
            />
            <Route
                path='/slider'
                element={<SliderPage />}
            />
            <Route
                path='/table'
                element={<TablePage />}
            />
        </Routes>
    );
}
