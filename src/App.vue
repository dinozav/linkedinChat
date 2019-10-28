<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const axios = require("axios");
axios
  .get(
    "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=8670zijtrudfwx&redirect_uri=https%3A%2F%2Fnostalgic-easley-6b2d6e.netlify.com%2F&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social"
  )
  .then(function(response) {
    // handle success
    //eslint-disable-next-line
    console.log("Data:", response);
  })
  .catch(function(error) {
    // handle error
    //eslint-disable-next-line
    console.log("Error:", error);
  });
</script>

<style lang="scss">
</style>
