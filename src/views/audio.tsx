import {Helmet} from "react-helmet";

export function Audio() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link href="http://localhost:5173/audio" rel="canonical" />
            </Helmet>
        </>
    );
}
