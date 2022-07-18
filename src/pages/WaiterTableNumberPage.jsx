import React from "react";
import { Button, Container, Content, Footer, Header, FlexboxGrid, Col } from "rsuite";

export function WaiterTableNumberPage() {
    const tableNumber = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    return (
        <>
            <Container>
                <Header>Header</Header>
                <Content>
                    <div className="show-grid">
                        <FlexboxGrid justify="center">
                            {
                                tableNumber.map(table => {
                                    return (
                                        <>
                                            <FlexboxGrid.Item style={{
                                                marginBottom: "15px"
                                            }} as={Col} md={3}>
                                                <Button color="green" appearance="primary"
                                                >Mesa: {table}</Button>
                                            </FlexboxGrid.Item>

                                        </>
                                    )
                                })
                            }
                        </FlexboxGrid>
                    </div>
                </Content>
                <Footer>Footer</Footer>
            </Container>



        </>
    )
}