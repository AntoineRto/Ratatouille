import App from './App.js';

const app1 = new App();
const app2 = new App();
const app3 = App.instance;

app1.name = "App1";

const bp = true;