import React, { useState, useEffect } from "react";
import "./Slider.css";
import  Icon from "../images/icon.png"
import  Advert2 from "../images/advert.png"



const Slider = () => {
  
  let peopleC = [
    {
      id: 1,
      image: Icon,
      name: "Luật Thái Gia",
      title: "UY TÍN",
      quote:
        "Luật Thái Gia chỉ nhận và thực hiện dịch vụ pháp lý cho Khách Hàng một khi đã tìm hiểu kỹ và trong khả năng của mình, đảm bảo cung cấp dịch vụ tốt nhất cho Khách Hàng. ",
    },
    {
      id: 2,
      image: Advert2,
      name: "Luật Thái Gia",
      title: "CHUYÊN NGHIỆP",
      quote:
        "Với đội ngũ nhân sự được tổ chức theo từng chuyên ngành, chúng tôi đã và đang hiện thực hóa mục tiêu 'Luật sư của doanh nghiệp, luật sư riêng của gia đình và luật sư riêng của cá nhân'",
    },
    {
      id: 3,
      image: Advert2,
      name: "Luật Thái Gia",
      title: "TRÁCH NHIỆM",
      quote:
        "Khách Hàng sử dụng dịch vụ của Luật Thái Gia sẽ thật sự an tâm để phát triển cộng việc của mình, toàn bộ các vấn đề pháp lý, sự an toàn pháp lý là trách nhiệm của luật sư chúng tôi.",
    },
    {
      id: 4,
      image: Icon,
      name: "Luật Thái Gia",
      title: "HỖ TRỢ 24/24",
      quote:
        "Khách Hàng không phải mất thời gian để tìm hiểu những rắc rối của thủ tục hay các tranh chấp về pháp lý, chỉ cần liên hệ với Khánh An Phát để được tư vấn chính xác, vì đó là công việc của chúng tôi.",
    },
  ];

  const [people] = useState(peopleC);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Tại sao chọn Luật Thái Gia</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
