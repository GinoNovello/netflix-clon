import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/layout/layout";
import {Home} from "./views/home";
import {UserSelection} from "./views/user-selection";
import {Series} from "./views/series";
import {Movies} from "./views/movies";
import {Latest} from "./views/latest";
import {MyList} from "./views/my-list";
import {Audio} from "./views/audio";
import {Player} from "./components/player";

function App() {
    return (
        <Routes>
            <Route element={<UserSelection />} path="/" />;
            <Route element={<Layout />}>
                <Route element={<Home />} path="/home" />;
                <Route element={<Series />} path="/series" />;
                <Route element={<Movies />} path="/movies" />;
                <Route element={<Latest />} path="/latest" />;
                <Route element={<MyList />} path="/list" />;
                <Route element={<Audio />} path="/audio" />;
                <Route element={<Player />} path="/player" />;
            </Route>
        </Routes>
    );
}
export default App;
