import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function Details() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector(store => store.details);
    const history = useHistory();

    const title = details[0] ? details[0].title : '';
    const poster = details[0] ? details[0].poster : '';
    const description = details[0] ? details[0].description : '';
    const genres = details[0] ? details.map(detail => detail.name).join(', ') : '';
    console.log('hi', genres);

    // useEffect fetching movie info
    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id });
    }, [id]);

    return (

        // Show all details **including ALL genres** for the selected movie,
        // including title, description, and the image, too! 
        // Use Sagas and Redux to handle these requests and data.
        <>
            <h1>{title}</h1>
            <img src={poster} alt={title} />
            <p>{genres}</p>
            <p>{description}</p>

            {/* Back to list button */}
            <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={() => history.push('/')}>Back to movie list</Button>
        </>

    )

}

export default Details;