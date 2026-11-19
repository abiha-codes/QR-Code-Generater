const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;           // if the input is emty then return from here
    generateBtn.innerText = "Generating QR Code...";

    // gettig a Qr code of user e entersd value using the qrserver
    // api and passing the api retured img src to qrImg

    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {      // once qr code img loaded
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(qrInput.qrValue){
        wrapper.classList.remove("active");
    }
})