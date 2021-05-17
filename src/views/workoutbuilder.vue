<template>
<div>
  <div class="container">
      <div class="row">
      </div>
          <div class="row">
          </div>

      <div class="row">
          <h2 id="workouttype">  Workout type </h2>
      </div>
  <div id="row1" class="row">
    <div class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">At-home</label><br>
    </div>
    <div class="col">
         <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">In-gym</label><br>
    </div>
    <div class="col">
      
    </div>
  </div>
   <div class="row">
          <h2 id="workouttype">  Workout style </h2>
      </div>
  <div id="row2" class="row">
  <div class="col">
       <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Fat burning</label><br>
    </div>
    <div id="coll" class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Strenght building</label><br>
    </div>
    <div class="col">
      
    </div>
  </div>
   <div class="row">
      <h2 id="workouttype">  Muscle groups </h2>  
   </div>
  <div id="row3" class="row">
       <div class="col">
       <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Arms</label><br>
    </div>
    <div id="coll" class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Back</label><br>
    </div>
    <div class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Abs</label><br>
    </div>
  </div>
  <div id="row4" class="row">
        <div class="col">
       <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Legs</label><br>
    </div>
    <div id="coll" class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Chest</label><br>
    </div>
    <div class="col">
      
    </div>
  </div>
  <div class="row">
      <h2 id="workouttype">  Dificulty </h2>  
   </div>
   <div id="row5" class="row">
       <div class="col">
       <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Begginer</label><br>
    </div>
    <div id="coll" class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Intermidiate</label><br>
    </div>
    <div class="col">
      <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
<label  class="btn btn-outline-dark" for="btn-check-outlined">Advanced</label><br>
    </div>
  </div>
  <div id='row6' class="row">
      <div class="col">
          
      </div>
      <div class="col">
          <router-link to="workoutresult">
          <button type="button" class="btn btn-danger btn-lg">Create workout</button>
          </router-link>
      </div>
      <div class="col">
          
      </div>
   </div>
</div>
</div>
</template>
<script>


export default {
    name:"workoutbuilder",
    }

</script>
<style  scoped>
#workouttype{
text-align: left;
color: white;
margin-top: 3%;
margin-bottom: 3%;
}
#row1{
    margin-left: -14%;
    
}
#row2{
    margin-left: -13%;
    
}
#row3{
    margin-left: -16%;
    margin-top: 1%;
margin-bottom: 4%;
}
#row4{
margin-left: -16%;
margin-bottom: 1%;
}
#row5{
margin-left: -14.5%;
margin-bottom: 7%;
}
#row6{
   margin-bottom: 4%; 
}
</style>
