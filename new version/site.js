function startAnimation() {
    var box = document.querySelector('.box');
    box.style.animation = 'anime 3s cubic-bezier(0.1, 1, 0.3, 1) 0s 1 forwards';
    setTimeout(textAppear, 1000);
}
function textAppear() {
    document.getElementById('TextMain').style.display = 'block';
}
function turnOffLight () {

}
