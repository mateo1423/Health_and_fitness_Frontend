<template>
  <div class="container">
  <div class="row">
    <div class="col"><h3 id="Naslov1">When do you want to wake up?</h3></div>

    <div class="col"></div>
    <div class="col"><h3 id="Naslov1">When do you want to go to sleep?</h3></div>
  </div>
    <div id='row2' class="row">
         <div class="col"><div>
         <input type="number" min="0" max="23" placeholder="7" v-model="variables.wakeuphours" >:
         <input type="number" min="0" max="59" placeholder="00" v-model="variables.wakeupmins">
         </div>
         </div>
         <div class="col"></div>
         <div class="col"><div>
         <input type="number" min="0" max="23" placeholder="22" v-model="variables.gotosleephours">:
         <input type="number" min="0" max="59" placeholder="00" v-model="variables.gotosleepmins">
         </div></div>
    </div>
      <div id='row3' class="row">
         <div class="col"><router-link to="bedtime"  v-on:click.native="bedtime_calculator()"><button class="btn btn-primary" type="button">Calculate bedtime</button></router-link></div>
         <div class="col"></div>
         <div class="col"><router-link to="wakeuptime" v-on:click.native="wake_up_time_calculation()"><button class="btn btn-primary" type="button">Calculate wake-up time</button></router-link></div>
         
      </div>
</div>
</template>

<script>
import variables from '@/variables.js'

export default {
    name:"sleepcalculator",
    data() {
    return{ 
      variables,
      
      
      
      };
    },

methods: {
  wake_up_time_calculation(){
    //prvi interval
    this.variables.interval1_hours=Number(variables.gotosleephours)+6
    if(this.variables.interval1_hours>24){
      this.variables.interval1_hours=this.variables.interval1_hours-24
    }
    this.variables.interval1_mins=this.variables.gotosleepmins
  
//drugi interval
  if( Number(this.variables.interval1_mins)+30>59){
    this.variables.interval2_hours=Number(this.variables.interval1_hours)+2
    this.variables.interval2_mins=Number(this.variables.interval1_mins)+30
    this.variables.interval2_mins=this.variables.interval2_mins%60
  }
  else{
    this.variables.interval2_hours=Number(this.variables.interval1_hours)+1
    this.variables.interval2_mins=Number(this.variables.interval1_mins)+30
    //treci interval
  }
  if( Number(this.variables.interval2_mins)+30>59){
    this.variables.interval3_hours=Number(this.variables.interval2_hours)+2
    this.variables.interval3_mins=Number(this.variables.interval2_mins)+30
    this.variables.interval3_mins=this.variables.interval3_mins%60
  }
  else{
    this.variables.interval3_hours=Number(this.variables.interval2_hours)+1
    this.variables.interval3_mins=Number(this.variables.interval2_mins)+30
  }

  //cetvrti interval
    if( Number(this.variables.interval3_mins)+30>59){
    this.variables.interval4_hours=Number(this.variables.interval3_hours)+2
    this.variables.interval4_mins=Number(this.variables.interval3_mins)+30
    this.variables.interval4_mins=this.variables.interval4_mins%60
  }
  else{
    this.variables.interval4_hours=Number(this.variables.interval3_hours)+1
    this.variables.interval4_mins=Number(this.variables.interval3_mins)+30
  }

  },


bedtime_calculator(){
 //prvi interval
if(Number(variables.wakeuphours)-9<0){
  this.variables.bedtimeinterval1_hours=24-(9-Number(variables.wakeuphours))
   this.variables.bedtimeinterval2_hours=Number(this.variables.bedtimeinterval2_hours)-24
  this.variables.bedtimeinterval1_mins=variables.wakeupmins
}
else{
  this.variables.bedtimeinterval1_hours=Number(variables.wakeuphours)-9
   this.variables.bedtimeinterval1_mins=variables.wakeupmins
}
//drugi interval

if( Number(this.variables.bedtimeinterval1_mins)+30>59){
  
this.variables.bedtimeinterval2_hours=Number(this.variables.bedtimeinterval1_hours)+2
if(this.variables.bedtimeinterval2_hours>=24)
{
  this.variables.bedtimeinterval2_hours=Number(this.variables.bedtimeinterval2_hours)-24
}
    this.variables.bedtimeinterval2_mins=Number(this.variables.bedtimeinterval1_mins)+30
    this.variables.bedtimeinterval2_mins=this.variables.bedtimeinterval2_mins%60
}
else{
  this.variables.bedtimeinterval2_hours=Number(this.variables.bedtimeinterval1_hours)+1
    this.variables.bedtimeinterval2_mins=Number(this.variables.bedtimeinterval1_mins)+30
}

//treci interval

if( Number(this.variables.bedtimeinterval2_mins)+30>59){
  
this.variables.bedtimeinterval3_hours=Number(this.variables.bedtimeinterval2_hours)+2
if(this.variables.bedtimeinterval3_hours>=24)
{
  this.variables.bedtimeinterval3_hours=Number(this.variables.bedtimeinterval3_hours)-24
}
    this.variables.bedtimeinterval3_mins=Number(this.variables.bedtimeinterval2_mins)+30
    this.variables.bedtimeinterval3_mins=this.variables.bedtimeinterval3_mins%60
}
else{
  this.variables.bedtimeinterval3_hours=Number(this.variables.bedtimeinterval2_hours)+1
    this.variables.bedtimeinterval3_mins=Number(this.variables.bedtimeinterval2_mins)+30
}
//cetvrti interval

if( Number(this.variables.bedtimeinterval3_mins)+30>59){
  
this.variables.bedtimeinterval4_hours=Number(this.variables.bedtimeinterval3_hours)+2
if(this.variables.bedtimeinterval4_hours>=24)
{
  this.variables.bedtimeinterval4_hours=Number(this.variables.bedtimeinterval4_hours)-24
}
    this.variables.bedtimeinterval4_mins=Number(this.variables.bedtimeinterval3_mins)+30
    this.variables.bedtimeinterval4_mins=this.variables.bedtimeinterval4_mins%60
}
else{
  this.variables.bedtimeinterval4_hours=Number(this.variables.bedtimeinterval3_hours)+1
    this.variables.bedtimeinterval4_mins=Number(this.variables.bedtimeinterval3_mins)+30
}

}
 }
}
</script>
<style scoped>
#Naslov1{
  color: aliceblue;
}
#row2{
  margin-top:4%;
  
}
#row3{
  margin-top:4%;
}
</style>