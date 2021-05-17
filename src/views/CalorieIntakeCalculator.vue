<template>
  <div>
    <div class="container">

      <div class="row">
        <h2 id="inputs">Weight gain/loss</h2>
      </div>

      <div class="row">
        <div class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"/>
          <label class="btn btn-outline-dark" for="btn-check-outlined">Gain</label><br />
        </div>
        <div class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark" for="btn-check-outlined"
            >Loss</label
          ><br />
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <h2 id="inputs">Gender</h2>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark" for="btn-check-outlined"
            >Male</label
          ><br />
        </div>
        <div id="col" class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark" for="btn-check-outlined"
            >Female</label
          ><br />
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <h2 id="inputs">Activity</h2>
      </div>
      <div id="row" class="row">
        <div class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark" for="btn-check-outlined"
            >Light</label
          ><br />
        </div>
        <div id="col" class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark" for="btn-check-outlined"
            >Average</label
          ><br />
        </div>
        <div class="col">
          <input
            type="checkbox"
            class="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          />
          <label class="btn btn-outline-dark" for="btn-check-outlined"
            >Heavy</label
          ><br />
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
