import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup'

const FormC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let errorForm = {}
        if(name.trim() === '')
        {
            errorForm['name'] = 'Họ và tên không được để trống'
        }
        if(email.trim() === '')
        {
            errorForm['email'] = 'Email không được để trống'
        }
        if(tel.trim() === '')
        {
            errorForm['tel'] = 'Số điện thoại không được để trống'
        }
        if(tittle.trim() === '')
        {
            errorForm['tittle'] = 'Tiêu đề không được để trống'
        }
        if(description.trim() === '')
        {
            errorForm['description'] = 'Mô tả không được để trống'
        }
        console.log(errorForm.name)
        if (Object.keys(errorForm) == 0)
        {
            let data = {
                'entry.341284223': name,
                'entry.1894415154' : email,
                'entry.239575575': tel,
                'entry.1507243237':tittle,
                'entry.662749957': description
            }
            let queryString = new URLSearchParams(data);
            queryString = queryString.toString();
            
            let xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIAKtt9g0aQVDPkM2k3u4BEUTpF9CVH6xIDUwEnTDRGY-jQg/formResponse', true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(queryString);
            setName('')
            setEmail('')
            setTel('')
            setTittle('')
            setDescription('')
        }
        else{
            console.log('nhập đầy đủ');
            setName('')
            setEmail('')
            setTel('')
            setTittle('')
            setDescription('')
        }
    }

    return (
            <div className="form grid wide">
                <Row>
                    <Col lg="8" md="5">
                        <form action="" method="post" className="col l-8 c-12 m-12">
                            <div className="form__item">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    required id="form__name"
                                    placeholder="Họ và tên..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <span className="form__required"></span>
                            </div>
                            <div className="form__item">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email của bạn..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="form__required"></span>
                            </div>
                            <div className="form__item">
                                <Form.Control 
                                    type="tel"
                                    name="number"
                                    required
                                    placeholder="Số điện thoại..."
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                />
                                <span className="form__required"></span>
                            </div>
                            <div className="form__item">
                                <Form.Control
                                    type="tel"
                                    name="tittle"
                                    required
                                    placeholder="Tiêu đề..."
                                    value={tittle}
                                    onChange={(e) => setTittle(e.target.value)}
                                />
                                <span className="form__required"></span>
                            </div>
                            <div className="form__item">
                                <Form.Control
                                    type="text"
                                    name="description"
                                    required
                                    placeholder="Mô tả vấn đề của bạn..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <span className="form__required"></span>
                            </div>
                            <div className="form__notify"></div>
                            <Button id="form__submit" onClick={handleSubmit} variant="outline-danger">Gửi</Button>
                        </form>
                    </Col>
                    <Col lg="4" md="5">
                        <Alert variant="danger">
                            <Alert.Heading>Thông tin liên hệ</Alert.Heading>
                            <ListGroup>
                                <ListGroup.Item variant="primary">602/51e Điện Biên Phủ, P.22, Q.Bình Thạnh</ListGroup.Item>
                                <ListGroup.Item variant="success">0933 943 686</ListGroup.Item>
                                <ListGroup.Item variant="warning">xuansuonglawyer@gmail.com</ListGroup.Item>
                                <ListGroup.Item variant="info">fb.com/luatthaigia</ListGroup.Item>
                            </ListGroup>
                        </Alert>
                    </Col>
                </Row>
            </div>
    )
}

export default FormC