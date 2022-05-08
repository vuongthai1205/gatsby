const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)
function Start(){
    handleForm()
    handleSlide()
    handelBgService()
    loaddingPage()
}

export default Start

function handleForm(){
    let submitForm = $('#form__submit')
    submitForm.onclick = function(e){
        e.preventDefault();
        let notifyForm = $('.form__notify')
        let name = $('input[name="name"]').value
        let tel = $('input[name="number"]').value
        let email = $('input[name="email"]').value
        let description = $('input[name="description"]').value
        let tittle = $('input[name="tittle"]').value
        let data = {
            'entry.341284223': name,
            'entry.1894415154' : email,
            'entry.239575575': tel,
            'entry.1507243237':tittle,
            'entry.662749957': description
        }
        let requiredOj = $$('.form__required')
        
        if(requiredOj.length > 0)
        {
            requiredOj.forEach(item => {
                item.innerText = '';
            });
        }
        // validateForm
        let errorForm = {}

        if (name.trim() === '')
        {
            errorForm['name'] = 'Họ và tên không được để trống'
            $('input[name="name"]').parentElement.querySelector('.form__required').innerText = errorForm['name']
        }
        if (tel.trim() === '')
        {
            errorForm['tel'] = 'Số điện thoại không được để trống'
            $('input[name="number"]').parentElement.querySelector('.form__required').innerText = errorForm['tel']
        }
        if (email.trim() === '')
        {
            errorForm['email'] = 'Email không được để trống'
            $('input[name="email"]').parentElement.querySelector('.form__required').innerText = errorForm['email']
        }
        if (tittle.trim() === '')
        {
            errorForm['tittle'] = 'Tiêu đề không được để trống'
            $('input[name="tittle"]').parentElement.querySelector('.form__required').innerText = errorForm['tittle']
        }
        if (description.trim() === '')
        {
            errorForm['description'] = 'Mô tả không được để trống'
            $('input[name="description"]').parentElement.querySelector('.form__required').innerText = errorForm['description']
        }

        if(Object.keys(errorForm) === 0)
        {
            name = ''
            tel = ''
            email = ''
            tittle = ''
            description = ''
            let queryString = new URLSearchParams(data);
            queryString = queryString.toString();
            
            let xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfIAKtt9g0aQVDPkM2k3u4BEUTpF9CVH6xIDUwEnTDRGY-jQg/formResponse', true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            notifyForm.innerText = 'Đang xử lý'
            notifyForm.classList.add('thank')
            console.log('đang xử lý')
            xhr.send(queryString);
            console.log('Cảm ơn')
            console.log(name)
            notifyForm.innerText = 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất'
            notifyForm.classList.add('thank')
        }
        else{
            notifyForm.innerText = 'Vui lòng kiểm tra lại dữ liệu'
            notifyForm.classList.add('danger')
        }
    }
    
}

function handleSlide(){
    var slideIndex = 1;
    showSlides(slideIndex);
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");
        if (n > slides.length){
            slideIndex = 1
        }    
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides,2000)
    }
}

function handelBgService(){
    let bgcService = $$(".service__top")
    bgcService[0].style.backgroundImage = "url(./assets/images/img-01.jpg)"
}

function loaddingPage(){
    window.onload = function (){
        setTimeout(function(){
            $('.load-page').style.display = 'none'
        },1000)
        $('.main').style.display = 'block'
    }
}