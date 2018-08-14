function menuMobile() {
    if ($('#btn-menu-mobile').prop('checked')) {
        //alert('Seleccionado');
        $('.menu').css('transform','translateX(0)');
        $('#btn-menu label').css('color','#adb5ba');
    } else{
        //alert('no seleccionado');
        $('.menu').css('transform','translateX(-100%)');
        $('#btn-menu label').css('color','#fff');
    }
}
