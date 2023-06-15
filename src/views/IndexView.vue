<script>
import IndexBanner from '../components/index-banner.vue';
import IndexAbout from '../components/index-about.vue';
import IndexAtom from '../components/index-atom.vue';
import IndexPartner from '../components/index-partner.vue';

export default {
    data() {
        return {
            banner_obj: {
                url: './images/index-banner.webp',
                hover: ['Passion Makes Distinction', '激情造就卓越'],
                hover_img: './images/index-banner-hover.webp'
            }
        }
    },
    components: {
        IndexBanner,
        IndexAbout,
        IndexAtom,
        IndexPartner
    },
    mounted() { },
}
</script>

<template>
    <IndexBanner :banner_obj="banner_obj"></IndexBanner>
    <IndexAbout></IndexAbout>
    <IndexAtom></IndexAtom>
    <IndexPartner></IndexPartner>
</template>

<style scoped></style>