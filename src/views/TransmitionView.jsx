import {Container } from "react-bootstrap";
import Dispositivo from "../components/Device";
//const devicesData = require('../data/devicesData.JSON')
function TransmisionView() {
    const devices = [
        {
            "name":"Microscopio",
            "brand": "Leica",
            "station": "Piso 5",
            "available": true
        },
        {
            "name":"Microscopio",
            "brand": "Leica2",
            "station": "Piso 3",
            "available": true
        },
        {
            "name":"Macroscopia",
            "brand": "Leica",
            "station": "Piso 5",
            "available": false
        },
        {
            "name":"Microscopia",
            "brand": "Leica",
            "station": "Piso 5",
            "available": true
        },
        {
            "name":"Microscopio",
            "brand": "Leica",
            "station": "Piso 1",
            "available": false
        },
        {
            "name":"Microscopio",
            "brand": "Leica2387",
            "station": "Piso 6",
            "available": true
        }
    ]
    return (

        <div className="container">
            <h2 style={{alignSelf:"start"}}>Transmisiones disponibles</h2>
            <Container style={{alignSelf:"center"}}>
                {
                devices?.map((element, key) => {
                    return(
                        <Dispositivo key={key} item={element}/>
                    )
                })}
                {/* <Row >
                    <Col>
                        <CardInformation name="Microscopio" />
                    </Col>
                    <Col>
                        <CardInformation name="Microscopio" />
                    </Col>
                    <Col>
                        <CardInformation name="Microscopio" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardInformation name="Macroscopia" />
                    </Col>
                    <Col>
                        <CardInformation name="Macroscopia" />
                    </Col>
                    <Col>
                        <CardInformation name="Macroscopia" />
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
}
export default TransmisionView;