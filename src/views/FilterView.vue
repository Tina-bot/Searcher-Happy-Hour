<template>
  <div class="container">
        <h1>Result of Drinks with {{ ingredient }} </h1>
        <div class="card">
          <input type="text" class="form-control" v-model="ingredient" placeholder="Ingredient">
        <button class="btn btn-primary" v-on:click="filterIngredient">Filter</button>
                <div class="card-body">
                    <div class="card-image">
                        <img :src="image" alt="" style="width:200px">
                    </div>
                    <h5 class="card-title">Drinks with {{ingredient}} :</h5>
                    <p class="card-text">
                        <ul class="list-group" id="list-group-drinks">
                            <li class="list-group-item" v-for="drink in drinks" :key="drink">
                                <span class="badge badge-dark text-muted" v-on:click="drinkSelected(drink.idDrink)">  {{drink.strDrink}}</span>                            </li>
                        </ul>
                        </p>
            </div>
            </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      ingredient: this.$route.query.ingredient,
      drinks: [],
      API: 'https://www.thecocktaildb.com/api/json/v1/1'
    }
  },
  methods: {
    async filterIngredient () {
      const response = await fetch(`${this.API}/filter.php?i=${this.ingredient}`)
      const data = await response.json()
      this.drinks = data.drinks
    },
    drinkSelected (id) {
      this.$router.push(`/details/${id}`)
    }
  },
  components: {
  },
  created () {
    this.filterIngredient()
  },
  computed: {
    image () {
      return `https://www.thecocktaildb.com/images/ingredients/${this.ingredient}.png`
    }
  },
  watch: {
    ingredient () {
      this.filterIngredient()
    }
  }
}
</script>

<style>
.card-title {
  font-size: 1.5em;
}
#list-group-drinks{
    max-height: 200px;
    overflow-y: scroll;
}
h5{
    font-size: 1.5em;
    }
</style>
