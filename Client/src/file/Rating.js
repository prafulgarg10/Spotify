import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
function Rating({user}) {
    const [song, setSong] = useState([]);
    const songRef = useRef();
    const rateRef = useRef();
    useEffect(() => {
        axios.get("http://localhost:3001/song_name").then((response) => {
            setSong(response.data);
        });
    }, []);
    function clickHandler(event) {
        event.preventDefault();
        const enteredSong = songRef.current.value;
        const enteredRate = rateRef.current.value;
        const data = {
            SName: enteredSong,
            Rating: enteredRate,
            Email: user
        }
        axios.post("http://localhost:3001/rate", data).then((res,err) => {
            console.log(res);
        });
    }
    return (
        <div>
            <Container>
            <h4>Select any song to rate</h4>
            <form action="/rate" method="post" onSubmit={clickHandler} className="col-9 mt-3">
                <div className="mb-3 row">
                    <label for="songs" className="col-sm-2 col-form-label">Choose Song</label>
                    <div className="col-sm-8">
                        <select class="form-select" id="songs" required ref={songRef}>
                            <option selected disabled value="">Search..</option>
                            {
                                song.map((songs) => {
                                    return (
                                        <option>{songs.SName}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="rate" className="col-sm-2 col-form-label">Give Rating</label>
                    <div className="col-sm-8">
                        <select class="form-select" id="rate" required ref={rateRef}>
                            <option selected disabled value="">Search..</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <input type="submit" value="Rate" className="btn-success" />
                        </div>
                    </div>
            </form>
            </Container>
        </div>
    );
}
export default Rating;