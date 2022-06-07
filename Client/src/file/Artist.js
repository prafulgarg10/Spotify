import {Container, Row, Col, Table} from "react-bootstrap";
import { useEffect, useState } from "react";
import Axios from "axios";
function Artist() {
    const [artist, setArtist] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/artist").then((response) => {
            setArtist(response.data);
            console.log(response.data);
        });
    }, []);
    return (
        <div>
            <Container className='mt-3'>
                <Row>
                    <Col><h4>Top 10 Artists</h4></Col>
                </Row>
            </Container>
            <Container className='mt-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Artists</th>
                            <th>Date of Birth</th>
                            <th>Songs</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           artist.map((artists,num) => {
                               return(
                                <tr>
                                <td>{num+1}</td>
                                <td>{artists.AName}</td>
                                <td>{artists.DOB.substring(0,10)}</td>
                                <td>{(artists.SName!=null) ? artists.SName : "Haven't sung any song yet!"}</td>
                            </tr>
                               );
                           })
                       }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
export default Artist;

