<template>
  <div class="container">
    <!-- <ShowTime />
 -->
    <h1>Drink Details 🍹</h1>
    <div class="card">
      <h5 class="card-title">• {{ drink.strDrink }} •</h5>
      <div class="card-img">
        <img :src="drink.strDrinkThumb" style="width: 100%" alt="" />
      </div>
      <div class="card-body">
        <div class="card-ingredients-badges">
          <ul>
            <li v-for="ingredient in ingredientsArray" :key="ingredient">
              <span class="badge badge-dark text-white" v-on:click="filterIngredient(ingredient)">
                {{ ingredient }}
              </span>
            </li>
          </ul>
        </div>
        <hr />
        <h6>Instructions:</h6>
        <p class="card-text">{{ drink.strInstructions }}</p>
        <h6>Glass:</h6>
        <p class="card-text">{{ drink.strGlass }}</p>
        <h6>Category:</h6>
        <p class="card-text">{{ drink.strCategory }}</p>
        <hr />
        <img
          src="../assets/images/divider.svg"
          style="
            width: 200px;
            margin-bottom: -50px;
            filter: brightness(0) invert(1);
          "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
/* import ShowTime from '@/components/ShowTime.vue'
 */ export default {
  data () {
    return {
      API: 'https://www.thecocktaildb.com/api/json/v1/1',
      drink: {},
      ingredientsArray: [],
      ingredients: ''
    }
  },
  methods: {
    getDrink () {
      fetch(`${this.API}/lookup.php?i=${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.drink = data.drinks[0]
          this.ingredients =
            this.drink.strIngredient1 +
            ',' +
            this.drink.strIngredient2 +
            ',' +
            this.drink.strIngredient3
          this.ingredientsArray = this.ingredients.split(',')
        })
    },
    filterIngredient (ingredient) {
      this.$router.push({
        name: 'filter',
        query: {
          ingredient: ingredient
        }
      })
    }
  },
  components: {
    /* ShowTime */
  },
  mounted () {
    this.getDrink()
  }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
}
.card-title {
  font-size: 2em;
  margin-bottom: 30px;
  font-family: "Josefin Slab", serif;
}
.card h6 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: white;
}
.container {
  margin-top: 20px;
  width: 100%;
  color: rgb(245, 223, 223);
  max-width: 500px;
}
.card-img {
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
}

.card-ingredients-badges .badge {
  background-color: #ff0080;
  color: #fff;
  font-size: 0.8em;
  font-weight: 100;
  border-radius: 0.25rem;
}

.card-ingredients-badges ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
.card-ingredients-badges li {
  margin-right: 10px;
}
.card-ingredients-badges .badge:hover {
 cursor: pointer;
}
</style>
