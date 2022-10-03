<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Online shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#/login">Login</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>

// import CustomLogin from "@/pages/Custom-Login";

export default {
  name: "Custom-Navbar",
  // components: {
  //   CustomLogin
  // },
  date(){
    return{
      links: [
        {
          name: 'Login',
          href: '/login'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
