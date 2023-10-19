import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/layout";
import {Detail} from "./views/detail";
import {Home} from "./views/home";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<Home />} path="/" />;
                <Route element={<Detail />} path="/detail/:id" />;
            </Route>
        </Routes>
    );
}
export default App;
