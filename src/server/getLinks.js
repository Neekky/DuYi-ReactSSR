import fs from 'fs';

export default function () {
    const result = fs.readdirSync('./public/css')
        .filter(file => file.endsWith('.css'))
        .map(filename => `<link rel="stylesheet" href="css/${filename}"></link>`);
    return result.join('\n');
}