import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Details() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector(store => store.details);
    console.log('hello', details);

    // useEffect fetching movie info
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, [id]);

    return (

        // Show all details **including ALL genres** for the selected movie,
        // including title, description, and the image, too! 
        // Use Sagas and Redux to handle these requests and data.
        <>
            <h1>Details</h1>
            <h2>{details.title}</h2>
            <img src={details.poster} alt={details.title} />
            <p>{details.description}</p>
        </>

        // Back to list button

    )

}

export default Details;