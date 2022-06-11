<template>
  <div id="app">
   <nav id="navibar" class="navbar navbar-light" style="background-color: #707070;">
   
     <router-link  to="/"><img id="logo"  src="@/assets/logo.png"
               height="60"
               /></router-link >

<div id="Login_button">
  <button type="button" class="btn btn-primary">Login</button>
</div>
  
</nav>
<body>
</body>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
background-color:#5E5E5E;

}
html, 
body {
    margin: 0;
    padding: 0;
    background-color:#5E5E5E;
}

#navibar {
  margin: 3%;
 z-index: 99999;


}
#logo{
 margin-left: 7%;
}

#Login_button{
  margin-right: 1%;
}
</style>
