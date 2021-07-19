
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b></b><br>`;
html += `Hostname: <b>${hostname}</b></b><br>`;
html += `Pathname: <b>${pathname}</b></b><br>`;
html += `URL Completa: <b>${href}</b></b><br>`;

document.write(html);