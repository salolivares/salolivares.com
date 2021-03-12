const fs = require('fs');

const args = process.argv.slice(2);
const files = fs.readdirSync(args[0]);

const pFiles = Array.from(new Set(files.map(file => file.split('_')[0])));

console.log({
  url: '',
  title: '',
  country: '',
  year: '',
  images: pFiles.map(file => ({
    id: file,
    name: '',
    camera: ''
  }))
})