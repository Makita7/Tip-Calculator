import { createApp } from 'vue'
import './styles/main.scss'
import './styles/variables.scss'
import App from './App.vue'
import router from './router/index';


// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const customTheme = {
    dark: false,
    colors: {
        background: '#c5e4e7',
        primary: '#31b5a8',
        secondary: '#00474b',
        cyanG: '#3c5f61',
        lCyan: 'hsl(185, 41%, 84%)',
        veryLCyan: 'hsl(189, 41%, 97%)',
        gray: 'hsl(186, 14%, 43%)',
    },
};

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "customTheme",
        themes: {
            customTheme,
        },
    },
});

createApp(App)
.use(vuetify, {
    iconFont: 'mdi'
})
.use(router)
.mount('#app')

