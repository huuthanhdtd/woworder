<template>
  <div>
    <TheHeader />
    <main class="lg:block relative pt-16 lg:pt-24 bg-light-elevatedSurface dark:bg-dark-elevatedSurface transition-colors duration-300 ease-linear">
      <Nuxt />
    </main>
    <TheFooter />
    <TheMobileBottomNav />
  </div>
</template>

<script>

export default {
  head () {
    let canonical = `http://localhost:3000${this.$route.path}`
    if (this.$store.state.locale !== 'vi') {
      canonical = `https://${this.$store.state.locale}.localhost:3000${this.$route.path}`
    }
    const link = [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'vi', href: `http://localhost:3000${this.$route.path}` },
      { rel: 'alternate', hreflang: 'en', href: `http://en.localhost:3000${this.$route.path}` },
      { rel: 'alternate', hreflang: 'ja', href: `http://ja.localhost:3000${this.$route.path}` }
    ]
    link.forEach((l) => {
      if (l.href.slice(-1) !== '/') {
        l.href = l.href + '/'
      }
    })
    return {
      htmlAttrs: { lang: this.$store.state.locale },
      link,
      meta: [
        // Open Graph
        { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtJS' },
        { hid: 'og:title', property: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: canonical },
        { hid: 'og:image', property: 'og:image', content: 'http://localhost:3000/nuxt-card.png' },
        // Twitter Card
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { hid: 'twitter:image', name: 'twitter:image', content: 'http://localhost:3000/nuxt-card.png' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'The NuxtJS Framework' }
      ]
    }
  }
}
</script>
