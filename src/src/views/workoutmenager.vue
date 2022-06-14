<template>
 <div class="container">
  <div class="row">
    <div class="col">
    <h3 id="Naslov1">SELECT WORKOUT:</h3>
    </div>
    <div class="col">
    
    </div>
    <div class="col">
    
    </div>
    <div class="col">
    
    </div>
  </div>
 <div id="row2" class="row">
    <div class="col">
  <router-link to="workouttracker">
  <div id="workoutplan" class="card" style="width: 18rem;">
  <img src="@/assets/workoutplanpicature.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-text">Workout 1</h3>
  </div>
</div>
  </router-link>
</div>
<div class="col">
    
    </div>
    <div class="col">
    
    </div>
 
 </div>
</div>
</template>
<script>


export default {
    name:"workoutmenager",
    }

</script>

<style scoped>
#Naslov1{
  color: aliceblue;
  margin-left: -15%;
}

#workoutplan{
 background-color:#2C2C2C ;
 color: aliceblue;
 margin-top: 3%;
 margin-bottom: 3%;
}
#row2{
  background-color: #484747;
}
</style>
