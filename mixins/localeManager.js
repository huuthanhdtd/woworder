export default {
  computed: {
    locales () {
      return [
        { text: 'Tiếng Việt', locale: 'vi', path: 'http://localhost:3000' + this.$route.path },
        { text: 'English', locale: 'en', path: 'http://en.localhost:3000' + this.$route.path },
        { text: '日本語', locale: 'ja', path: 'http://ja.localhost:3000' + this.$route.path }
      ]
    },
    currentLang: {
      get () {
        return this.locales.map(l => l.locale).indexOf(this.$store.state.locale)
      },
      set (index) {
        const lang = this.locales[index]
        if (!lang) {
          return
        }
        window.location.href = lang.path
      }
    }
  }
}
