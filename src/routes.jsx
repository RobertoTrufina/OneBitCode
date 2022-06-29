import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetScreen from "./screens/planet";
import PlanetsScreen from "./screens/planets";



const NewRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlanetsScreen />} />
            <Route path='/planet' element={<PlanetScreen />} />
        </Routes>
    </BrowserRouter>
)

export default NewRoutes