import { Container, Button, Row, Col, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Rating from "./Rating";
function Song() {
    const [list, setList] = useState([]);
    const location = useLocation();
    useEffect(() => {
        Axios.get("http://localhost:3001/song").then((response) => {
            setList(response.data);
        });
    }, []);
    return (
        <div>
            <NavBar user={location.state.name}/>
            <Container className='mt-3'>
                <Row>
                    <Col><h4>Top 10 Songs</h4></Col>
                    <Col style={{ 'display': 'flex', 'justifyContent': 'end' }}><Link to="/AddSong" state={{Email: location.state.name}}><Button variant="secondary">+ Add Songs</Button></Link></Col>
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
                                <td>{items.Rating}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
            <Rating user={location.state.name}/>
        </div>
    );
}
export default Song;