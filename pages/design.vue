<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1 class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4">
            Nhận diện thương hiệu Wow<span class="text-primary-base">Order</span>
          </h1>
          <h3 class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6">
            Bộ nhận diện thương hiệu của WowOrder.<br>
            Bản quyền thuộc về woworder.org.
          </h3>
        </div>
        <DesignIllustration class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"/>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/2 p-4">
          <section class="bg-gray-100 rounded p-6">
            <h2 class="text-2xl text-nuxt-gray font-medium leading-normal mb-6">
              Light theme
            </h2>
            <figure class="rounded hover:bg-gray-200">
              <img src="/logos/tctt.svg" alt="nuxt-logo">
              <figcaption><a href="/logos/tctt.svg" target="_blank" rel="noopener">tctt.svg</a> / <a href="/logos/tctt-square.svg" target="_blank" rel="noopener">tctt-square.svg</a></figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img src="/logos/tctt-icon.png" srcset="/logos/tctt-icon@2x.png 2x" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-icon.png" target="_blank" rel="noopener">tctt-icon.png</a></figcaption>
              <span class="dimensions">512 x 512</span>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img src="/logos/tctt-emoji.png" srcset="/logos/tctt-emoji@2x.png 2x" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-emoji.png" target="_blank" rel="noopener">tctt-emoji.png</a></figcaption>
              <span class="dimensions">128 x 128</span>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img src="/logos/tctt-typo.svg" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-typo.svg" target="_blank" rel="noopener">tctt-typo.svg</a></figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-200 mt-6">
              <img src="/logos/built-with-tctt.svg" alt="built-with-tctt-logo">
              <figcaption><a href="/logos/built-with-tctt.svg" target="_blank" rel="noopener">built-with-tctt.svg</a></figcaption>
            </figure>
          </section>
        </div>
        <div class="w-full lg:w-1/2 p-4">
          <section class="bg-nuxt-gray rounded p-6">
            <h2 class="text-2xl text-white font-medium leading-normal mb-6">
              Dark theme
            </h2>
            <figure class="rounded hover:bg-gray-800">
              <img src="/logos/tctt-white.svg" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-white.svg" target="_blank" rel="noopener">tctt-white.svg</a> / <a href="/logos/tctt-square-white.svg" target="_blank" rel="noopener">tctt-square-white.svg</a></figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img src="/logos/tctt-icon-white.png" srcset="/logos/tctt-icon-white@2x.png 2x" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-icon-white.png" target="_blank" rel="noopener">tctt-icon-white.png</a></figcaption>
              <span class="dimensions">512 x 512</span>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img src="/logos/tctt-emoji-white.png" srcset="/logos/tctt-emoji-white@2x.png 2x" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-emoji-white.png" target="_blank" rel="noopener">tctt-emoji-white.png</a></figcaption>
              <span class="dimensions">128 x 128</span>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img src="/logos/tctt-typo-white.svg" alt="tctt-logo">
              <figcaption><a href="/logos/tctt-typo-white.svg" target="_blank" rel="noopener">tctt-typo-white.svg</a></figcaption>
            </figure>
            <figure class="rounded hover:bg-gray-800 mt-6">
              <img src="/logos/built-with-tctt-white.svg" alt="built-with-tctt-logo">
              <figcaption><a href="/logos/built-with-tctt-white.svg" target="_blank" rel="noopener">built-with-tctt-white.svg</a></figcaption>
            </figure>
          </section>
        </div>
      </div>
      <p class="text-center mt-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">
        You can also download our <a href="/favicon.ico" target="_blank" rel="noopener">favicon</a> or our  <a href="/logos/tctt-logos.sketch" target="_blank" rel="noopener">Sketch file</a>.
      </p>
    </div>
  </div>
</template>

<script>
import DesignIllustration from '@/assets/illustrations/design.svg?inline'

export default {
  transition: 'logos',
  components: {
    DesignIllustration
  },
  head () {
    const title = 'Nhận diện thương hiệu - WowOrder'
    const description = 'Bộ nhận diện thương hiệu của WowOrder. Bản quyền thuộc về woworder.org.'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>

<style scoped>
figure {
  @apply relative p-4 text-center text-gray-500 table w-full;
  &:hover {
    & .dimensions {
      @apply opacity-100;
      top: 10px;
    }
  }
  & img {
    @apply inline-block;
  }
  & figcaption {
    @apply pt-4;
  }
  & .dimensions {
    @apply font-normal absolute top-0 opacity-0;
    right: 20px;
    transition-property: all;
    transition-duration: 0.3s;
  }
}
a {
  @apply text-nuxt-lightgreen font-normal;
  &:hover {
    @apply underline;
  }
}
</style>
