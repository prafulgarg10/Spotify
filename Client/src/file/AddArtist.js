import { useRef } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
function AddArtist() {
    const nameRef = useRef();
    const dateRef = useRef();
    const bioRef = useRef();
    function clickHandlerArtist(event) {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredDate = dateRef.current.value;
        const enteredBio = bioRef.current.value;
        const addData = {
            Name: enteredName,
            DOB: enteredDate,
            Bio: enteredBio
        }
        Axios.post("http://localhost:3001/addArtist", addData).then((res) => {
            console.log(res);
            

        });
    }
    return (
        <div>
            <Container className="mt-3">
                <div className="mb-3 row">
                    <label for="artist" className="col-sm-4 col-form-label">Artist Name</label>
                    <div className="col-sm-6">
                        <input type="text" readonly className="form-control" id="artist" placeholder="Enter Artist name" ref={nameRef} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="date" className="col-sm-4 col-form-label">Date of Birth</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control" id="date" ref={dateRef} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="bio" className="col-sm-4 col-form-label">Bio</label>
                    <div className="col-sm-6">
                        <textarea class="form-control" id="bio" rows="3" ref={bioRef}></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-4 col-form-label"></label>
                    <div className="col-sm-6">
                        <input type="submit" value="Add Artist" className="btn-success" onClick={clickHandlerArtist} />
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default AddArtist;