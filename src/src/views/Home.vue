<template>

   <div id="home">
   
<div class="container">
  <div class="row">
    <div class="col">
      <router-link to="workoutbuilder">
    <div id="workoutbuilder" class="card bg-dark text-white">
  <img id="slikautega" src="@/assets/workoutbuilder.png" class="card-img" alt="...">
  <div class="card-img-overlay">
   
   
  </div>
</div>
      </router-link>
    </div>
    <div class="col">
    </div>
    <div class="col">
    </div>
    
    <div class="col">
      <router-link to="calorieintake">
     <div id="calorieintake" class="card bg-dark text-white">
  <img id="slikahrane" src="@/assets/calorieintake.png" class="card-img" alt="...">
  <div class="card-img-overlay">
   
    </div>
  </div>
      </router-link>
</div>
  </div>
<div id="drugired" class="row">
  <div class="col">
    <router-link to="workoutmenager">
 <div id="workoutmenager" class="card bg-dark text-white">
  <img id="slikaworkoutmenagera" src="@/assets/workoutmenager.png" class="card-img" alt="...">
  <div class="card-img-overlay">
   
    </div>
  </div>
    </router-link>
  </div>
   <div class="col">
    </div>
    <div class="col">
    </div>
  <div  class="col">
     <router-link to="sleepcalculator">
 <div id="sleepcalculator" class="card bg-dark text-white">
  <img id="slikasleepcalculatora" src="@/assets/sleepcalculator.png" class="card-img" alt="...">
  <div class="card-img-overlay">
   
    </div>
  </div>
     </router-link>
  </div>
</div>
</div>
</div>

</template>

<script>

</script>
<style scoped>
#home{
width: 100%;
height: 1000px;
background-image: url(' ~@/assets/background.png');
position: absolute;
top: 0;
  background-position: center;
}
#workoutbuilder{
  height: 250px;
  width: 600px;
  background-color: #2D0505;
  z-index: 99999;
  margin-top: 165%;
  margin-bottom: 5%;
    border-radius: 25px;
    margin-left: -17%;
}
#slikautega{
  height:250px;
    border-radius: 25px;
}
#calorieintake{
  margin-top: 165%;
  margin-bottom: 5%;
    height: 250px;
      width: 600px;
        border-radius: 25px;
 
}
#slikahrane{
   height:250px;
     border-radius: 25px;
}
#workoutmenager{
   margin-left: -17%;
  margin-bottom: 5%;
    height: 250px;
      width: 600px;
        border-radius: 25px;
}
#slikaworkoutmenagera{
   height:250px;
     border-radius: 25px;
}
#sleepcalculator{
  
  margin-bottom: 5%;
    height: 250px;
      width: 600px;
        border-radius: 25px;
      
}
#slikasleepcalculatora{
  height:250px;
    border-radius: 25px;
}
#drugired{
  margin-top: 1%;
}
</style>
