import fs from 'fs';

export default function () {
    const result = fs.readdirSync('./public/js')
        .filter(file => file.endsWith('.js'))
        .map(filename => `<script src="js/${filename}"></script>`);
    return result.join('\n');
}