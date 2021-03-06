<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt relative">
    <div class="container mx-auto px-4 py-24">
      <section>
        <h1 class="text-3xl font-medium uppercase text-center pb-8" v-html="$store.state.homepage.companies.attrs.title" />
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div v-for="(company, i) in langCompanies.slice(0, 5)" :key="i" class="p-4 lg:p-8 text-center">
            <a :href="company.url" target="_blank" rel="noopener nofollow" class="company relative block">
              <ClientOnly>
                <img :src="'/img/companies/original/' + company.img" :alt="company.name" :class="[company.class, $colorMode.value === 'dark' ? 'absolute top-0 left-0 opacity-0' : '']" class="original">
                <img v-if="$colorMode.value === 'dark'" :src="'/img/companies/preview/' + company.img" :alt="company.name" :class="company.class" class="preview">
              </ClientOnly>
            </a>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div v-for="(company, i) in langCompanies.slice(5, 10)" :key="i" class="p-4 lg:p-8 text-center">
            <a :href="company.url" target="_blank" rel="noopener nofollow" class="company relative block">
              <ClientOnly>
                <img :src="'/img/companies/original/' + company.img" :alt="company.name" :class="[company.class, $colorMode.value === 'dark' ? 'absolute top-0 left-0 opacity-0' : '']" class="original">
                <img v-if="$colorMode.value === 'dark'" :src="'/img/companies/preview/' + company.img" :alt="company.name" :class="company.class" class="preview">
              </ClientOnly>
            </a>
          </div>
        </div>
        <div v-if="langCompanies.length > 10" class="hidden lg:flex flex-col lg:flex-row items-center justify-between">
          <div v-for="(company, i) in langCompanies.slice(10, 15)" :key="i" class="p-8 text-center">
            <a :href="company.url" target="_blank" rel="noopener nofollow" class="company relative block">
              <ClientOnly>
                <img :src="'/img/companies/original/' + company.img" :alt="company.name" :class="[company.class, $colorMode.value === 'dark' ? 'absolute top-0 left-0 opacity-0' : '']" class="original">
                <img v-if="$colorMode.value === 'dark'" :src="'/img/companies/preview/' + company.img" :alt="company.name" :class="company.class" class="preview">
              </ClientOnly>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      companies: {
        vi: [
          { name: 'Todoist', img: 'todoist.svg', url: 'https://todoist.com/templates/', class: 'h-10' },
          { name: 'GitLab', img: 'gitlab.svg', url: 'https://design.gitlab.com', class: 'h-16' },
          { name: 'Nespresso', img: 'nespresso.svg', url: 'https://www.nespresso.com/careers/', class: 'h-10' }
        ],
        en: [
          { name: 'Todoist', img: 'todoist.svg', url: 'https://todoist.com/templates/', class: 'h-10' },
          { name: 'GitLab', img: 'gitlab.svg', url: 'https://design.gitlab.com', class: 'h-16' },
          { name: 'Nespresso', img: 'nespresso.svg', url: 'https://www.nespresso.com/careers/', class: 'h-10' },
          { name: 'System76', img: 'system76.svg', url: 'https://system76.com', class: 'h-10' },
          { name: 'Aircall', img: 'aircall.svg', url: 'https://aircall.io', class: 'h-10' }
        ],
        ja: [
          { name: 'Rakuten', img: 'rakuten.png', url: 'https://biccamera.rakuten.co.jp', class: 'h-10' },
          { name: 'Coconala', img: 'coconala.svg', url: 'https://profile.coconala.com', class: 'h-10' },
          { name: 'JobTalk', img: 'jobtalk.svg', url: 'https://jobtalk.jp', class: 'h-10' },
          { name: 'MuuMuuDomain', img: 'muu-muu-domain.svg', url: 'https://muumuu-domain.com', class: 'h-10' },
          { name: 'Ekiten', img: 'ekiten.png', url: 'https://pro.ekiten.jp', class: 'h-8' },
          { name: 'KG', img: 'kg.png', url: 'https://kg.com', class: 'h-8' },
          { name: 'Suzuri', img: 'suzuri.svg', url: 'https://people.suzuri.jp', class: 'h-10' },
          { name: 'Bijutsu Techo', img: 'bijutsu-techo.svg', url: 'https://bijutsutecho.com', class: 'h-8' },
          { name: 'Skeb', img: 'skeb.svg', url: 'https://skeb.jp', class: 'h-10' },
          { name: 'ReRe', img: 'rere.svg', url: 'https://www.rere.jp', class: 'h-10' }
        ]
      }
    }
  },
  computed: {
    langCompanies () {
      const locale = this.$store.state.locale
      const companies = this.companies[locale] || []

      // minimum 10 companies
      if (companies.length < 15 && locale !== 'vi') {
        // Fill with english companies and remove duplicates
        return companies.concat(this.companies.en.filter(enCompany => !companies.find(c => c.img === enCompany.img)))
      }
      return companies
    }
  }
}
</script>

<style lang="scss" scoped>
.company {
  .preview {
    opacity: 0.5;
    filter: grayscale(100%);
    transition: all 250ms ease;
  }
  .original {
    opacity: 0.5;
    filter: grayscale(100%);
    transition: all 250ms ease;
  }
  &:hover {
    .preview {
      opacity: 0;
    }
    .original {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}
</style>
