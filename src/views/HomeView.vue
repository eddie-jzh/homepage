<script>
import IndexBanner from '../components/index-banner.vue';
import IndexAbout from '../components/index-about.vue';
import IndexAtom from '../components/index-atom.vue';
import IndexPartner from '../components/index-partner.vue';

export default {
    components: {
        IndexBanner,
        IndexAbout,
        IndexAtom,
        IndexPartner
    }
}
</script>

<template>
    <IndexBanner></IndexBanner>
    <IndexAbout></IndexAbout>
    <IndexAtom></IndexAtom>
    <IndexPartner></IndexPartner>
</template>