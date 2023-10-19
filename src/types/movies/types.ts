export interface Movie {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface SpokeLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
export interface MovieCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface MovieDetail {
    adult: boolean;
    genres: Genre[];
    backdrop_path: string;
    production_companies: ProductionCompany[];
    belongs_to_collection: MovieCollection;
    production_countries: ProductionCountry[];
    spoken_languages: SpokeLanguage[];
    budget: number;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface SearchMovieData {
    adult: boolean;
    genre_ids: number[];
    backdrop_path: string;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface SearchMoviesResponse {
    page: number;
    results: SearchMovieData[];
    total_pages: number;
    total_results: number;
}
