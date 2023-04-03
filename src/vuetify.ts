import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import { mdi, aliases } from 'vuetify/iconsets/mdi'


export const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    defaults: {
        theme: {
            defaultTheme: 'light',
        },

    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    }
});

const SplitiumTheme = {
    
};