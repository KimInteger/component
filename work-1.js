// ! default params
// 매개변수 안쓸 때도 있을 떄를 대비하여 디폴트 파라미터라는 것이 있다.
// 매개변수 = 대체될 값을 적으면된다.

function formatHTML(language = 'korean') {
  let htmlData = {
    titleOne:'김정수',
    titleTwo : "KimInteger",
    h1:"내 이름은",
    p: "인티저 입니다."
  };

  // * helper function
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