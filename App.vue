<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import "./assets/fonts/Nunito/Nunito.css";

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Nunito";
}
input, textarea, select, button {
  font-family: "Nunito";
}
.el-header {
  padding: 0 !important;
}
.page {
  width: 80%;
  margin-left: 10%;
}
</style>