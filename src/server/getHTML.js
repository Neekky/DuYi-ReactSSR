import getScripts from './getScripts';
import getLinks from './getLinks';

export default function (conponentHTML) {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR</title>
        ${getLinks()}
    </head>
    <body>
        <div id="root">${conponentHTML}</div>
    </body>
    ${getScripts()}
    </html>
    `

    return html;
}