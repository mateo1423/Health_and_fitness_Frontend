<template>
<body >
<div id="body2">
  <div class="container">
      <div class="row">
      </div>
          <div class="row">
          </div>

      <div class="row">
          <h2 id="workouttype">  Workout type </h2>
      </div>
  <div id="row1" class="row">
    
     <div  class="btn-group"  data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
         <div class="col">
           
  <input type="radio" v-model="store.workout_type" class="btn-check" value="At home" name="btnradio" id="btnradio1" autocomplete="off" >
  <label class="btn btn-outline-dark" for="btnradio1">At home</label>
   </div>
<div class="col">
  <input type="radio" v-model="store.workout_type" class="btn-check" name="btnradio" value="In-gym" id="btnradio2" autocomplete="off" checked>
  <label class="btn btn-outline-dark" for="btnradio2">In-gym</label>
</div>

    <div class="col">
      
    </div>
     </div>
   
  
   
    <div class="col">
      
    </div>
     
  </div>
   <div class="row">
      <h2 id="workouttype">  Muscle groups </h2>  
   </div>
 <div id="row3" class="row">
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          
            <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck1" value="arms"  autocomplete="off" >
  <label class="btn btn-outline-dark" for="btncheck1">Arms</label>
            </div>
              <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck2" value="back"  autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck2">Back</label>
              </div>
                <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck3" value="abs"  autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck3">Abs</label>
  </div>
    </div>
     </div>
                <div id="row4" class="row">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <div class="col-sm">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck4" value="legs"  autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck4">Legs</label>
            </div>
              <div class="col">
  <input type="checkbox" class="btn-check" v-model="store.muscle_groups" id="btncheck5" value="chest" autocomplete="off">
  <label class="btn btn-outline-dark" for="btncheck5">Chest</label>
              </div>  
              <div class="col">
              </div>
                </div>
              
                
               
</div>
  
 
  <div class="row">
      <h2 id="workouttype">  Dificulty </h2>  
   </div>
   <div id="row5" class="row">
       <div class="btn-group" data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
           <div class="col">
  <input type="radio" class="btn-check" name="btnradio2" id="btnradio5" value="Beginner" v-model="store.workout_dificulty" autocomplete="off" checked>
  <label class="btn btn-outline-dark" for="btnradio5">Beginner</label>
           </div>
<div class="col">
  <input type="radio" class="btn-check" name="btnradio2" id="btnradio6" value="Intermidiate" v-model="store.workout_dificulty" autocomplete="on">
  <label class="btn btn-outline-dark" for="btnradio6">Intermidiate</label>
</div>
<div class="col">
  <input type="radio" class="btn-check" name="btnradio2" id="btnradio7" value="Advaned" v-model="store.workout_dificulty" autocomplete="off">
  <label class="btn btn-outline-dark" for="btnradio7">Advanced</label>
</div>
</div>
  </div>
  <div id='row6' class="row">
      <div class="col">
          
      </div>
      <div class="col">
          <router-link to="workoutresult" v-on:click.native="build_workout()">
          <button type="button" class="btn btn-danger btn-lg">Create workout</button>
          </router-link>
      </div>
      <div class="col">
          
      </div>
   </div>
</div>
</div>
</body>
</template>
<script>
import store from "@/store";
/* import { Auth } from '@/services' */
export default {
    name:"workoutbuilder",
    data() {
    return{ 
      store,
      /* Auth.getUser().username */
      };
       
  },
    
    
 methods: {
   build_workout(){
     
console.log("hello",store.workout_type,store.muscle_groups,store.workout_dificulty ) 
   },
 },
}

</script>
<style  scoped>
#workouttype{
text-align: left;
color: white;
margin-top: 3%;
margin-bottom: 3%;
}
#body2{
background-color:#5E5E5E ;
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
#btn{
    color: white;
}

</style>
