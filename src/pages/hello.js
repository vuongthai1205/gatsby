import Greeting from "../components/greeting";
import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

const Hello = () => {
    let infos = [
        {
            id:1,
            name: "Thái Gia Vương",
            age: 18
        },
        {
            id:2,
            name: "Lê Văn Vương",
            age: 11
        },
        {
            id:3,
            name: "Phạm Thị Vương",
            age: 12
        }
    ]
    return (
        <Container>
            <Layout>
                <title>Hello</title>
                {infos.map(info => {
                    return (
                        <Greeting name={info.name} age={info.age}/>
                    )
                })}
            </Layout>
        </Container>
    )
}

export default Hello