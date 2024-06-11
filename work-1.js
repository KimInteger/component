function formatHTML(language) {
  let htmlData = {
    titleOne:'김정수',
    titleTwo : "KimInteger",
    h1:"내 이름은",
    p: "인티저 입니다."
  };

  let decision = () => {
    if (language === "korean") {
      return htmlData.titleOne;
    } else if (language === 'english') {
      return htmlData.titleTwo;
    }
  };

  let html = `
  <!DOCTYPE html>
  <html lang=ko>
    <head>
      <title>${decision()}</title>
    </head>
    <body>
      <h1>${htmlData.h1}</h1>
      <p>${htmlData.p}</p>
    </body>
  </html>
  `

  return html;
};

console.log(formatHTML('korean'));
console.log(formatHTML('english'));