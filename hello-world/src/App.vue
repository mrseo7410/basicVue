<script setup>
import HelloWorld2 from './components/HelloWorld2.vue'
import HelloWorld3 from './components/HelloWorld3.vue'
import StarbucksEnterVue from './components/StarbucksEnter.vue'
import SmartPhone from './components/SmartPhone.vue';
import MyWatcherVue from './components/MyWatcher.vue';
import FamousWordVue from './components/FamousWord.vue';
import Hello from './components/Hello.vue';
import UsedPhoneVue from './components/UsedPhone.vue';

</script>

<template>
  <main>
    <!-- <HelloWorld2 />
    <HelloWorld3 /> -->
    <!-- <StarbucksEnterVue/> -->
    <!-- <SmartPhone/> -->
    <!-- <MyWatcherVue/> -->
    <!-- <FamousWordVue/> -->
    <!-- <Hello who="hi man"/> -->
    <UsedPhoneVue rank="리퍼폰"/>
    <UsedPhoneVue rank="S급"/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
