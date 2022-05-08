import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import Form from 'react-bootstrap/Form'

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
        <section className="form-container" id="form1">
            <div className="form grid wide">
                <div className="row">
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
                    <div className="col l-4 c-12 m-12">
                        <div className="info-form">
                            <h2>Thông tin liên hệ</h2>
                            <span><i className="fa-solid fa-location-crosshairs"></i>602/51e Điện Biên Phủ, P.22, Q.Bình Thạnh</span>
                            <span><i className="fa-solid fa-mobile-screen-button"></i>0933 943 686</span>
                            <span><i className="fa-solid fa-envelope"></i>xuansuonglawyer@gmail.com</span>
                            <span><i className="fa-brands fa-facebook"></i>fb.com/luatthaigia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormC