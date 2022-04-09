import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";

const TabC = () => {
    const [key, setKey] = useState('home');

        return (
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <p>Lorem</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>Lorem 323</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <p>THái Gia VƯơng</p>
                </Tab>
            </Tabs>
        );
}

export default TabC