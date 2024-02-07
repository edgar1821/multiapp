import QRCodeStyling from "qr-code-styling";

const QrCodeStyle = new QRCodeStyling({
  width: 230,
  height: 230,
  // image:
  //   "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/305770776_515950010531124_6689949112300901268_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=YGTIFN3X4_0AX_33EM3&_nc_ht=scontent-mia3-1.xx&oh=00_AfAxiBtxhLlj5S8kmH6Pj1__pk7Kq_rP57WSSuW2BSMDZA&oe=65C74A3F",
  dotsOptions: {
    color: "#000000",
    type: "classy",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

export default QrCodeStyle;
