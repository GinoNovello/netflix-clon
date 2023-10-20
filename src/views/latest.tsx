import {Helmet} from "react-helmet";

export function Latest() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link href="http://localhost:5173/latest" rel="canonical" />
            </Helmet>
        </>
    );
}
