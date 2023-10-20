import {Helmet} from "react-helmet";

export function MyList() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link href="http://localhost:5173/list" rel="canonical" />
            </Helmet>
        </>
    );
}
