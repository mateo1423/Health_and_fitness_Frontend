<template>
  <div>
    <div class="container">

      <div class="row">
        <h2 id="inputs">Weight gain/loss</h2>
      </div>

      <div class="row">
        
          <div class="btn-group"  data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
            <div class="col">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-dark" for="btnradio1">Gain</label>
        </div>
        <div class="col">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" >
            <label class="btn btn-outline-dark" for="btnradio2">Loss</label>
          <br />
        </div>
        <div class="col"></div>
        </div>
      </div>
      <div class="row">
        <h2 id="inputs">Gender</h2>
      </div>
      <div class="row">
        
           <div class="btn-group "  data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
              <div class="col">
          <input type="radio" class="btn-check" name="btnradio1" id="btnradio3" autocomplete="off" checked>
            <label class="btn btn-outline-dark" for="btnradio3">Male</label>
            <br />
        </div>
        <div id="col" class="col">
          <input type="radio" class="btn-check" name="btnradio1" id="btnradio4" autocomplete="off" >
            <label class="btn btn-outline-dark" for="btnradio4">Female</label><br />
        </div>
        <div class="col"></div>
        </div>
      </div>
      <div class="row">
        <h2 id="inputs">Activity</h2>
      </div>
      <div id="row" class="row">
        <div class="btn-group "  data-toggle="buttons" role="group" aria-label="Basic radio toggle button group">
        <div class="col">
          <input type="radio" class="btn-check" name="btnradio2" id="btnradio5" autocomplete="off" checked>
            <label class="btn btn-outline-dark" for="btnradio5">Light</label><br />
        </div>
        <div id="col" class="col">
          <input type="radio" class="btn-check" name="btnradio2" id="btnradio6" autocomplete="off" >
            <label class="btn btn-outline-dark" for="btnradio6">Average</label><br />
        </div>
        <div class="col">
          <input type="radio" class="btn-check" name="btnradio2" id="btnradio7" autocomplete="off" >
            <label class="btn btn-outline-dark" for="btnradio7">Heavy</label><br />
        </div>
        </div>
      </div>
      <div class="row">
        <h2 id="inputs">Weight</h2>
      </div>
      <div id="row">
        <input type="number" id="weight" />
      </div>

      <div class="row">
        <h2 id="inputs">Height</h2>
      </div>
      <div id="row">
        <input type="number" id="Height" />
      </div>

      <div class="row">
        <h2 id="inputs">Age</h2><br>
      </div>
      <div id="row">
        <input type="number" id="Age" />
      </div>

      <div id="row" class="row">
        <div class="col"></div>
        <div id="calories" class="col2">
          <router-link to="caloriesresult">
            <button type="button" class="btn btn-danger btn-lg">
              Calculate calories
            </button>
          </router-link>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#inputs {
  text-align: left;
  color: white;
  margin-top: 4%;
  margin-bottom: 4%;
}
.col {
  float: left;
  margin-right: 10%;  
}
#calories{
  margin-top: 100px;
  margin-bottom:10px;
}
</style>
<script>
export default {
  name: "calorieintake",
};
</script>