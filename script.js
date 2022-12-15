function menuOpener(){
    let menuAreaMobile = document.querySelector('#menuAreaMobile');

    if(menuAreaMobile.style.width == '150px'){
        menuAreaMobile.style.width = '0px';
    } else{
        menuAreaMobile.style.width = '150px';
    }
}

