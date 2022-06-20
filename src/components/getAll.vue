23 lines (21 sloc)  399 Bytes

<template>
<div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-4" id="lista">{{info.exercize_name}}</div>
      <div class="col-4" id="lista">{{info.how_to_do_exercize}}</div>
      <div class="col-4" id="lista">{{info.exercize_type}}</div>
      <div class="col-4" id="lista">{{info.exerciye_dificulty}}</div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: "getAll",
};
</script>

<style>
#lista {
   border: 1px solid black;
}
</style>