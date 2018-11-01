var request = require('request');
const cheerio = require('cheerio')
const  fs = require('fs');
const distPath = './src/data.js'


let injectText = 'export default [\n';
fs.writeFileSync(distPath, injectText);

request('http://ce.ys168.com/f_ht/ajcx/ml.aspx?cz=ml_dq&_dlmc=renxufeng&_dlmm=', function (error, response, body) {
  const $ = cheerio.load(body);


  let PromiseArr = [];
  for (let i = 0, len = $('.gml').length; i< len; i++) {
    let id = $('.gml')[i].attribs.id.slice(3);
    PromiseArr.push(new Promise((resolve, reject) => {
      request(`http://ce.ys168.com/f_ht/ajcx/wj.aspx?cz=dq&mlbh=${id}&_dlmc=renxufeng&_dlmm=`, (err, listResponse, listBody) => {
        if (err) {
          reject()
        }
        const $$ = cheerio.load(listBody);
        $$('.bjtb').next().map((i, elm) => {
          injectText = `  {\n`+
          `   href: '${elm.attribs.href}',\n`+
          `   text: '${elm.children[0].data.replace(/\.torrent/, '')}'\n`+
          `   },\n`;
          fs.appendFileSync(distPath, injectText);
        })
        resolve();
      })
    }))  
  }
  Promise.all(PromiseArr).then(() => {
    injectText = '];';
    fs.appendFileSync(distPath, injectText);
  })
});

