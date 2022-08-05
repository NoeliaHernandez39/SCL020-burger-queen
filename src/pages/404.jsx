
import { NavBar404up } from "Components/NavBar/NavBar404up";
import React, { useContext, useEffect } from "react";
import { Col, Content, FlexboxGrid, Footer, Grid, Header, Row } from "rsuite";


export function NotFound() {
    return (
        <>
            <div>
                <Header>
                    <NavBar404up></NavBar404up>
                </Header>

                <Content>
                    <FlexboxGrid justify="center">
                        <Grid>
                            <Row>
                                <Col xs={24} className="center">
                                    <img className="logo-404" style={{
                                        width: "20%"
                                    }} src="/image/logo.png" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} className="center">
                                    <img className="imagen404" src="/image/404.png" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} className="center">
                                    <h1 className="table" >
                                        Creo que estás perdido
                                    </h1><br></br>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} className="center">
                                    <label>No te preocupes, pulsa "VOLVER" para regresar a la pagína anterior.</label>
                                </Col>
                            </Row>
                        </Grid>
                    </FlexboxGrid>
                </Content>

                <Footer className="footer">
                </Footer>


            </div>
        </>
    )
}

// <>
//     <div>
//         <Header>
//             <NavTableUp></NavTableUp>
//         </Header>
//         <Content>
//             <FlexboxGrid justify="center">
//                 <Grid>
//                     <Row>
//                         <Col xs={24} className="center">
//                             <h1 className="table" >
//                                 SELECCIONA UNA MESA
//                             </h1>
//                         </Col>
//                     </Row>
//                     <Container>
//                         <Content>
//                             <div className="show-grid">
//                                 <FlexboxGrid justify="center">
//                                     {
//                                         tableNumber.map((table, index) => {
//                                             return (
//                                                 <div key={index} >
//                                                     <FlexboxGrid.Item style={{
//                                                         marginBottom: "20px"
//                                                     }} as={Col} md={5}>
//                                                         <Button className="btnTable itemtable" onClick={() => {
//                                                             navigate("/Menu?tipo=mesero&mesa=" + table)
//                                                         }} appearance="primary"
//                                                             style={{
//                                                                 padding: "30px",
//                                                                 fontSize: "24px",
//                                                             }}
//                                                         >Mesa: {table}</Button>
//                                                     </FlexboxGrid.Item>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </FlexboxGrid>
//                             </div>
//                         </Content>
//                     </Container>
//                 </Grid>
//             </FlexboxGrid>
//         </Content>
//     </div>
//     <Footer className="footer">
//         <NavTableUnder></NavTableUnder>
//     </Footer>
// </>