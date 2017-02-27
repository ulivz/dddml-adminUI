import 'vue-beauty/package/style/vue-beauty.min.css';
import Application from 'src/Application';

import App from 'view/main/App';

var app = Application.getInstance();

app.run(App, '#app', true);