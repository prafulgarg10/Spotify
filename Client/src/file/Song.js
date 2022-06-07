import { Container, Button, Row, Col, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
function Song() {
    const [list, setList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/song").then((response) => {
            setList(response.data);
        });
    }, []);
    return (
        <div>
            <Container className='mt-3'>
                <Row>
                    <Col><h4>Top 10 Songs</h4></Col>
                    <Col style={{ 'display': 'flex', 'justifyContent': 'end' }}><Link to="/AddSong"><Button variant="secondary">+ Add Songs</Button></Link></Col>
                </Row>
            </Container>
            <Container className='mt-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Song no.</th>
                            <th>Artwork</th>
                            <th>Song</th>
                            <th>Date of Release</th>
                            <th>Artist</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((items,num) => {
                            return(
                            <tr>
                                <td>{num+1}</td>
                                <td><Image src='/arijit.jpg' style={{ 'width': 100, 'height': 100 }} /></td>
                                <td>{items.SName}</td>
                                <td>{items.DOR.substring(0,10)}</td>
                                <td>{items.AName}</td>
                                <td>3 Star</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}
export default Song;