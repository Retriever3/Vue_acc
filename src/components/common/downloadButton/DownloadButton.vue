<template>
  <button @mousedown="downloadFile">출력</button>
</template>

<script>

import html2pdf from "html2pdf.js";

export default {
  props: ["dom", "name"],
  methods: {
    downloadFile() {
      const me = this;

      const invoice = document.querySelector(me.dom);
      let opt = {
        margin: 10,
        filename: me.name,
      };
      html2pdf().from(invoice).set(opt).save();
    },
  },
}
</script>

<style scoped>

</style>
