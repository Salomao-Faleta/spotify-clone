function menuOpener(){
    let menuArea = document.querySelector('#menuArea');

    if(menuArea.style.width == '150px'){
        menuArea.style.width = '0px';
    } else{
        menuArea.style.width = '150px';
    }
}

