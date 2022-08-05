<template>
  <div class="container card">
    <h1> Happy Hour 🍷 </h1>
      <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="search">Search drinks</label>
          <input
            type="text"
            placeholder="Margarita, Mojito, etc."
            class="form-control"
            id="search"
            v-model="search"
          />
        </div>
      </div>
    </div>
    <div class="buttons-group">
    <button class="btn btn-white text-white" v-on:click="goSearch">Search 🔎</button>
    <button class="btn btn-white text-white" v-on:click="random">Random 🔮</button>
    <button class="btn btn-white text-white" v-on:click="list">List all ✨</button>
    </div>
    <div class="result-search">
      <ul class="list-group" >
        <li class="list-group-item" v-for="drink in drinks" :key="drink">
          <span class="badge badge-dark text-white" v-on:click="drinkProfile(drink.idDrink)">{{drink.idDrink}}</span>
          <span class="badge badge-dark text-muted" v-on:click="drinkProfile(drink.idDrink)">{{drink.strDrink}}</span>
          <span class="badge badge-dark text-muted" v-on:click="drinkProfile(drink.idDrink)">- {{drink.strCategory}} </span>
        </li>

      </ul>
      </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      API: 'https://www.thecocktaildb.com/api/json/v1/1',
      drinks: [],
      search: ''
    }
  },
  methods: {
    async goSearch () {
      const response = await fetch(`${this.API}/search.php?s=${this.search}`)
      const data = await response.json()
      this.drinks = data.drinks
      console.log(this.drinks)
    },
    async random () {
      const response = await fetch(`${this.API}/random.php`)
      const data = await response.json()
      this.drinks = data.drinks
      console.log(data)
    },
    list () {
      this.$router.push('/list')
    },
    drinkProfile (id) {
      this.$router.push(`/details/${id}`)
    }
  },
  mounted () {
    this.goSearch()
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@500&display=swap");

.container:not(.result-search) {
    margin-top: 20px;
    width: 50%;
    color: rgb(245, 223, 223);
    max-width: 500px;
}
.container h1{
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-size: 3em;
  text-align: center;
  color: rgb(245, 223, 223);
  margin-bottom: 50px;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
}
.container .form-group {
  font-size: 1.4em;
}
.container .form-group label {
    font-weight: bold;

}
.container .form-group input,
.container .form-group select {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: rgba(121, 121, 121, 0.219);
  color: rgb(245, 223, 223);
}
.container .form-group input::placeholder {
  color: rgba(245, 223, 223, 0.253);
}

.container .form-group select > option {
  color: rgb(33, 156, 194);
}

.card {
  background: rgba(2, 2, 2, 0.397);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;
}
.result-search .list-group .badge:first-child {
  background-color: #ff0080;
}
.result-search .list-group .badge:hover{
              cursor: pointer;

}

.btn {
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgba(248, 248, 248, 0.144);
  font-size: 18px;

}
.btn:hover {
  background-color: #ff0080;
  color: rgb(245, 223, 223);
}
.list-group{
  text-align: start;
}

.buttons-group{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.buttons-group .btn{
  width: 100px;
}
.result-search{
  margin-top: 20px;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgba(15, 13, 13, 0.219);
    color: rgb(245, 223, 223);

}
.list-group-item{
  background-color: rgba(0, 0, 0, 0.219);
  border-bottom: 1px solid rgba(204, 204, 204, 0.61);
  font-weight: normal;
}
.list-group-item .badge{
  color: rgb(245, 223, 223) !important;
}
</style>
