const dl = require('datalib');
const csv = require('csv-parser');
const fs = require('fs');
const d3 = require('d3');

const rows = [];
fs.createReadStream('./data/dropped-frames.csv')
  .pipe(csv())
  .on('data', function (data) {
    const output = {
      Timestamp: data["Dropped Frame Start"],
      Duration: data.Duration
    };
    rows.push(output);
  })
  .on('end', function() {
    console.log('Done.');


    // // const companyCount = d3.nest()
    // //   .key((d) => d['Company'])
    // //   .rollup((v) => {
    // //     return {
    // //       totalComplaints: v.length,
    // //       percentTimelyResponse: d3.sum(v, (d) => {
    // //         return d['Timely response?'] === 'Yes'
    // //       }) / v.length,
    // //       percentCustomerDisputed: d3.sum(v, (d) => {
    // //         return d['Customer disputed?'] === 'Yes'
    // //       }) / v.length,
    // //       issues: d3.nest()
    // //         .key((d) => d['Issue'])
    // //         .rollup((v) => v.length)
    // //         .entries(v)
    // //         .sort((a, b) => d3.descending(a.value, b.value))
    // //         .slice(0, 1)
    // //     };
    // //   })
    // //   // .sortValues(d3.descending)
    // //   .entries(rows)
    // //   .sort((a, b) => d3.descending(a.values.totalComplaints, b.values.totalComplaints))
    // //   .slice(0, 10);

    // // // console.log(JSON.stringify(companyCount, null, 2));
    // // fs.writeFileSync('data/complaints.json', JSON.stringify(companyCount, null, 2));

    // // fs.writeFileSync('data/complaints-vl.json', JSON.stringify({ values: companyCount.map((row) => {
    // //   return Object.assign({}, row.values, {
    // //     name: row.key
    // //   });
    // // }) }, null, 2));

    // // const dateCount = d3.nest()
    // //   .key((d) => {
    // //     const date = new Date(d['Date received']);
    // //     return (date.getMonth() < 10 ? '0' : '') + date.getMonth() + '' + date.getFullYear();
    // //   })
    // //   .rollup((v) => v.length)
    // //   .entries(rows)
    // //   .map((d) => {
    // //     console.log(d.key);
    // //     console.log(new Date((+d.key.slice(0, 2)+1) + '/01/'+ d.key.slice(2)));
    // //     return {
    // //       // x:d.key,
    // //       x: new Date((+d.key.slice(0, 2)+1) + '/01/'+ d.key.slice(2)),
    // //       y: d.values
    // //     }
    // //   });

    // // fs.writeFileSync('data/complaints-by-date.json', JSON.stringify(dateCount, null, 2));


    // fs.writeFileSync('data/narratives.json', JSON.stringify(rows.filter(d => {
    //   const n = d['Consumer complaint narrative'];
    //   if (n) {
    //     return n.length < 250 && n.indexOf('XXXX') === -1;
    //   }
    // }).slice(0, 300), null, 2));




    // fs.writeFileSync('data/narratives-ecg.json', JSON.stringify(rows.filter(d => {
    //   if (d['Company'] !== 'Encore Capital Group') {
    //     return false;
    //   }
    //   const n = d['Consumer complaint narrative'];
    //   if (n) {
    //     return n.length < 250 && n.indexOf('XXXX') === -1;
    //   }
    // }).slice(0, 300), null, 2));



    fs.writeFileSync('data/dropped-frames.json', JSON.stringify(rows));
  });

