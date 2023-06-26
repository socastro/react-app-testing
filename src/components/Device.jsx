import {Card, Row, Col} from 'react-bootstrap';
import DisponibilidadDispositivo from './DeviceButton';

function Dispositivo(props){
    return(
        <Col md={6}>
            <Card style={{margin:"15px", textAlign:"center"}}  className="bg-dark text-white">
                    <Card.Img className="card-img" style={{opacity:"60%"}} src={props.item.name+".png"} height={'260px'} alt="Card image Microscopio" />
                   
                <Card.ImgOverlay style={{padding:"0px"}} >
                    <Card.Body style={{padding:"0px", backgroundColor:"rgba(0,0,0,0.5)", margin:"0%", border:"[30px solid #000]"}}>
                    <Row>
                        <Card.Title >{props.item.name}</Card.Title>
                    </Row>
                    <Row>
                        <Card.Text  >{props.item.station}</Card.Text>
                    </Row>
                    </Card.Body>
                    <Card.Text >
                        <DisponibilidadDispositivo available={props.item.available}/>
                    </Card.Text>
                    {/*<Card.Text>Iniciada hace current time-props.date</Card.Text>*/}

                    <Card.Footer style={{ top: "80%", position: "sticky", backgroundColor:"#212529"}}>
                    <small className="text-muted" style={{Color:"#ffffff"}}>Iniciada hace 3 minutos</small>
                    </Card.Footer>
                </Card.ImgOverlay>
            </Card>
        </Col>
    )
}
export default Dispositivo;