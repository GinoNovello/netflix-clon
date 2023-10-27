import {Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {Layout} from "./components/layout/layout";
import {Home} from "./views/home";
import {UserSelection} from "./views/user-selection";
import {Series} from "./views/series";
import {Movies} from "./views/movies";
import {Latest} from "./views/latest";
import {MyList} from "./views/my-list";
import {Audio} from "./views/audio";
import {Player} from "./views/player";
import {Search} from "./views/search";
import {useMoviesStore} from "./stores/movies-store";

function App() {
    const [firstRender, setFirstRender] = useState(false);

    const moviesData = useMoviesStore((state) => state.searchMoviesData);
    const navigate = useNavigate();

    useEffect(() => {
        if (moviesData && moviesData?.length > 0) {
            navigate("/search");
            setFirstRender(true);
        } else {
            firstRender && window.history.back();
        }
    }, [moviesData]);

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
                <Route element={<Search />} path="/search" />;
            </Route>
        </Routes>
    );
}
export default App;
