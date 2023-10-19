import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/layout";
import {Detail} from "./views/detail";
import {Home} from "./views/home";
import {UserSelection} from "./views/user-selection";

function App() {
    return (
        <Routes>
            <Route element={<UserSelection />} path="/" />;
            <Route element={<Layout />}>
                <Route element={<Home />} path="/home" />;
                <Route element={<Detail />} path="/detail/:id" />;
            </Route>
        </Routes>
    );
}
export default App;
