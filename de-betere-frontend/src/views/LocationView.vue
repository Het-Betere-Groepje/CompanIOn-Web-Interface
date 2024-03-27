<template>
  <div class="location">
    <div class="background-block">
      <div> 
        <h2>Location:</h2>
        <div class="switch-container">
          <input type="checkbox" id="locationSwitch" class="switch-input" v-model="isLocationOn" @change="toggleLocation" />
          <label for="locationSwitch" class="switch-label"></label>
        </div>
      </div>     

      <div> 
        <h2>Plaats:</h2>
        <div class="dropdown">
          <select id="plaatsDropdown">
            <option value="Verdieping 1">Verdieping 1</option>
            <option value="Verdieping 2">Verdieping 2</option>
            <option value="Verdieping 3">Verdieping 3</option>
            <option value="Verdieping 4">Verdieping 4</option>
            <option value="Verdieping 5">Verdieping 5</option>
            <option value="Verdieping 6">Verdieping 6</option>
          </select>
        </div>
      </div> 

      <div> 
      <button class="verder-btn" @click="logDropdownValue">Verder</button>
      </div>

    </div>
  </div>

</template>

<script>
var locationFollowing = true;
export default {
  data() {
  },
  methods: {
    toggleLocation() {
      console.log("Location switch toggled");
      if (this.isLocationOn) {
        console.log("Location is ON");
        locationFollowing = true;
      } else {
        console.log("Location is OFF");
        locationFollowing = false;
      }
    },
    logDropdownValue() {

      if(locationFollowing) {
        const selectedValue = document.getElementById('plaatsDropdown').value;
        console.log('Selected value:', selectedValue);
      } else {
        console.log('Location is OFF so turn it on');
      }
    }
  }
};
</script>

<style scoped>
  .background-block {
    position: absolute;
    top: 20%; 
    left: 0; 
    width: 15%;; 
    height: 20%;;
    background-color: #383838;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px; 
  }

  .switch-container {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    vertical-align: middle; 
  }

  .switch-input {
    display: none;
  }

  .switch-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFFBF7;
    border-radius: 34px;
  }

  .switch-label::after {
    content: "";
    position: absolute;
    top: 12%;
    left: 7%;
    width: 26px;
    height: 26px;
    background-color: red;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .switch-input:checked + .switch-label::after {
    transform: translateX(26px);
  }

  h2 {
    display: inline-block;
    margin-right: 10px;
    color: #FFFBF7;
  }

  .dropdown {
    display: inline-block;
    margin-right: 10px;
  }

  .dropdown select {
    padding: 5px;
    border-radius: 5px;
  }

  .verder-btn {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    background-color: #FFFBF7;
    color: black;
    border-radius: 30px;
    margin-top: 30px;
    margin-left: 50px; 
  }

</style>
