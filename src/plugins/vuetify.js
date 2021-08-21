import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/lib/util/colors'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

const opts = {
    lang: {
        locales: { pt },
        current: 'pt'
    },
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                primary: '#2c3e50',
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
        },
    },
}

export default new Vuetify(opts)