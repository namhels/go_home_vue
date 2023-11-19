<template>
  <div :id="$style.app">
    <h2>{{ text }}</h2>
    <ContainerMain>
      <ApartmentsFilterForm class="apartments-filter" @submit="logger" />
    </ContainerMain>
    <ApartmentsList :items="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem :key="apartment.id" :descr="apartment.descr" :rating="apartment.rating" :imgSrc="apartment.imgUrl"
          :price="apartment.price" />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentsList'
import ApartmentsItem from './components/apartment/ApartmentsItem'
import ApartmentsFilterForm from './components/apartment/ApartmentsFilterForm.vue'
import ContainerMain from './components/shared/ContainerMain.vue'
import apartments from './components/apartment/apartments'


export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
    ContainerMain
  },
  data() {
    return {
      text: '',
      apartments,
    }
  },
  methods: {
    logger(value) {
      console.log(value, '----form value')
    }
  },
}
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
