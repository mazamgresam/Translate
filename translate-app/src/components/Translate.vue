<template>
  <div class="py-12 lg:px-28 px-12 flex justify-between gap-4 lg:flex-row flex-col md:justify-center lg:gap-20">
    <form class="flex flex-col">
      <label for="text" class="font-bold text-xl text-gray-700 mb-3">Text to Translate</label>
      <textarea class="bg-gray-100 border-2 border-gray-500 rounded-md h-40  lg:w-[28rem] xl:w-[32rem] 2xl:w-[40rem] p-2" v-model="text" id="text" placeholder="Input text here"></textarea>
    </form>
    <div>
      <ul class="font-bold text-xl flex justify-start mb-2">
        <li :class="{ 'bg-black text-white' : language == 'id' }" @click="change('id')" class="border-2 border-gray-900 rounded-md mr-4 px-4 cursor-pointer">Indonesian</li>
        <li :class="{ 'bg-black text-white' : language == 'en' }" @click="change('en')" class="border-2 border-gray-500 rounded-md mr-4 px-4 cursor-pointer" >English</li>
      </ul>
      <p class="p-2 overflow-auto h-40 lg:w-[28rem] xl:w-[32rem] 2xl:w-[40rem] border-2 border-gray-500 rounded bg-gray-300" placeholder="Translate">{{ translate }}</p>
    </div>
  </div>
</template>
<script>
import EventService from '../services/EventService.js'

export default {
  data() {
    return {
      engine: 'google',
      text:'',
      translate: '',
      language: 'en',
    }
  },
  watch: {
    text() {
      if (this.text != '') {
        EventService.getTranslate(this.engine, this.text, this.language)
        .then(response => {
          this.translate = response.data.data.result
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    language() {
      if (this.text != '') {
        EventService.getTranslate(this.engine, this.text, this.language)
        .then(response => {
          this.translate = response.data.data.result
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  },
  methods: {
    change(language) {
        this.language = language
  }
}
}
</script>
<style lang="">
  
</style>