<template>
  <div class="container">
    <div class='row'>
        <div class='text'>Maintain weight: </div>
        <div class='output'> 2674 cal/day</div>
    </div><br>
    <div class='row'>
        <div class='text'>Mild weight loss: </div>
        <div class='output'> 2424 cal/day</div>
    </div><br>
    <div class='row'>
        <div class='text'>Weight loss: </div>
        <div class='output'> 2714 cal/day</div>
    </div><br>
    <div class='row'>
        <div class='text'>Extreme weight loss:</div>
        <div class='output'> 1647 cal/day</div>
    </div>
  </div>
</template>

<style scoped>
.row{
    text-align: left;
    font-size: 30px;
    
}
.text{
    color: white;
    margin-bottom: 2px;
}
.output{
    margin-left:3%;
}
</style>

<script>
export default {
  name: "caloriesresult",
};
</script>