const html2canvas = require('html2canvas');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <style type="text/css">
    body {
      padding: 0;
      margin: 0;
      background-color: black;
    }
    p {
      margin: 0 0 16px 0;
    }
    .paper {
      width: 792px;
      background-color: white;
      height: 1134px;

      position: absolute;
    }
    .text {
      font-family: "Courier New", monospace;
      font-size: 16px;
      line-height: 1.45;
      width: 640px;

      position: absolute;
      top: 80px;
      left: 56px;
    }
    .footer {
      font-family: "Verdana";
      font-size: 12px;

      position: absolute;
      bottom: 50px;
      left: 56px;
    }
    .page {
      font-family: "Helvetica", monospace;
      font-size: 96px;

      position: absolute;
      bottom: 14px;
      right: 54px;
    }
  </style>
  <script src="html2canvas.js" type="text/javascript"></script>
</head>
<body>
  <div class="paper">

    <div class="text">
      <p>
        Europe is currently at a turning point in its history. We will
        only overcome the challenges which lie ahead if all of us if
        politicians, citizens, employers and employees are able to pull
        together with a new common purpose defined by the needs of the
        current age. Unfortunately, the financial crisis, which was the
      </p>
      <p>
        result of shortcomings in the functioning and supervision of our
        financial institutions, is still with us today. At this crucial
        juncture, the European Union needs to act decisively and together.
        This crisis, whose origins lie on the other side of the Atlantic,
        has affected Europe more than any other region of the world by
      </p>
      <p>
        result of shortcomings in the functioning and supervision of our
        financial institutions, is still with us today. At this crucial
        juncture, the European Union needs to act decisively and together.
        This crisis, whose origins lie on the other side of the Atlantic,
        has affected Europe more than any other region of the world by
      </p>
      <p>
        result of shortcomings in the functioning and supervision of our
        financial institutions, is still with us today. At this crucial
        juncture, the European Union needs to act decisively and together.
        This crisis, whose origins lie on the other side of the Atlantic,
        has affected Europe more than any other region of the world by
      </p>
      <p>
        result of shortcomings in the functioning and supervision of our
        financial institutions, is still with us today. At this crucial
        juncture, the European Union needs to act decisively and together.
        This crisis, whose origins lie on the other side of the Atlantic,
        has affected Europe more than any other region of the world by
      </p>
      <p>
        result of shortcomings in the functioning and supervision of our
        financial institutions, is still with us today. At this crucial
        juncture, the European Union needs to act decisively and together.
        This crisis, whose origins lie on the other side of the Atlantic,
        has affected Europe more than any other region of the world by
      </p>
      <p>
        twice as many people over 65 per worker as today, European Union
        Member States will have to make considerable efforts to finance
        their social support regimes and to retain older people in the
        workforce. As the domestic supply of labour and skills declines,
        Europe will need to attract more migrant workers, with
      </p>
    </div>
    <div class="footer">Budapest 2015 – Text production – EN</div>
    <div class="page">
      4
    </div>
  </div>
  <script type="text/javascript">
 </script>

</body>
</html>
`);

const document = dom.window.document;

const paper = document.querySelector('.paper');
var ret = html2canvas(paper, {
  onrendered: function(canvas) {
    let src = canvas.toDataURL('image/png');
    console.log(src);
  }
});
 
console.log(ret);
