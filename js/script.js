window.onload=function(){
        changeScreen()
        document.querySelector('.header').scrollIntoView({ block: "start", behavior: "smooth" })
}
window.onresize = changeScreen
function changeScreen()
{
    // const big = 'img/background_1920.jpg'
    // const short_480 = 'img/background_480.jpg'
    // const short_768 = 'img/background_768.jpg'
    // // let titleStr = '<h3>Как <strong>ВСЕГО ЗА 3 ВЕЧЕРА</strong> выявить и раскрыть свой <strong>ВРОЖДЁННЫЙ ПОТЕНЦИАЛ,</strong>чтобы:</h3>'
    // let titleStr = document.createElement('h3')
    // if(window.innerWidth>=992)
    // {
    //     document.getElementById('back_image').setAttribute('src', big)
    //     document.querySelector('.title').children[2].remove()
    //     titleStr.innerHTML = 'Как <strong>ВСЕГО ЗА 3 ВЕЧЕРА</strong> выявить и раскрыть свой <strong>ВРОЖДЁННЫЙ ПОТЕНЦИАЛ,</strong>чтобы:'
    //     document.querySelector('.title').append(titleStr)
    // }
    // else if(window.innerWidth>=768)
    // {
    //     document.getElementById('back_image').setAttribute('src', short_768)
    //     document.querySelector('.title').children[2].remove()
    //     titleStr.innerHTML = 'Как <strong>ВСЕГО ЗА 3 ВЕЧЕРА</strong> выявить и раскрыть свой <strong>ВРОЖДЁННЫЙ ПОТЕНЦИАЛ,</strong>чтобы:'
    //     document.querySelector('.title').append(titleStr)
    // }
    // else if(window.innerWidth>=480)
    // {
    //     document.getElementById('back_image').setAttribute('src', short_480)
    //     document.querySelector('.title').children[2].remove()
    //     titleStr.innerHTML = 'Как <strong>ВСЕГО ЗА 3 ВЕЧЕРА</strong> выявить и раскрыть свой <strong>ВРОЖДЁННЫЙ ПОТЕНЦИАЛ,</strong><br>чтобы:'
    //     document.querySelector('.title').append(titleStr)
    // }
}