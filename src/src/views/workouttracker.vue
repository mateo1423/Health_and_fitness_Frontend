<template>
     <div class="container">
  <div class="row">
        <div id="checkbox" class="col-1">
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        </div>
      <div class="col-sm">
          <div id='vjezbe' class="card mb-3" >
         <div class="row g-0">
         <div class="col-md-4">
          <img src="@/assets/Pushups.png" alt="...">
         </div>
         <div class="col-md-8">
         <div class="card-body">
          <h5 class="card-title">Pushups</h5>
         <p class="card-text">A basic push up is an effective way to strengthen the chest<br> and arm muscles and can be easily scaled as you get stronger. </p>
         
         </div>
         </div>
         </div>
        </div>
      </div>
      
      
  </div>
    <div class="row">
        <div class="col-sm">
        </div>
        <div class="col-sm">
        <button id="endbutton" type="button" class="btn btn-primary btn-lg">END WORKOUT</button>
        </div>
    <div class="col-sm">
    </div>
    </div>
     </div>
</template>
<script>


export default {
    name:"workouttracker",
    }

</script>

<style scoped>
#vjezbe{
    background-color: #2C2C2C;
    color: aliceblue;
}
#checkbox{
    align-self: center;
}
#endbutton{
    margin-top: 10%;
 
    
}
</style>