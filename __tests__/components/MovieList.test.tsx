import { render, screen } from "@testing-library/react-native";

import MovieList from "@/components/MovieList";

const movies = [
    {
        id: 'movie1',
        title: "Movie One"
    },
    {
        id: 'movie2',
        title: "Movie Two"
    },
    {
        id: 'movie3',
        title: "Movie Three"
    },
    {
        id: 'movie4',
        title: "Movie Four"
    },
]

describe("<MovieList/>", () => {

    test("Snapshot", () => {
        const { toJSON } = render(<MovieList movies={movies} />)

        expect(toJSON()).toMatchSnapshot()
    })

    test("MovieList Renders correctly (with items)", () => {
        render(<MovieList movies={movies} />)

        movies.forEach((item) => {
            screen.getByText(item.title)
        })
    })

    test("MovieList Renders correctly (without items)", () => {
        render(<MovieList movies={[]} />)

        
        screen.getByText("No movies available")
        
    })


})