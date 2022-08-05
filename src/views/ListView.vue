<template>
    <div class="container" id="list-container">
<ShowTime />
        <h1> List of Drinks 🍸</h1>
        <div class= "list-drinks">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Glass</th>
                    <th>Instructions</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr v-for="drink,index in drinks" :key="index" @click="drinkSelected(drink.idDrink)">
                    <td >{{ drink.idDrink }}</td>
                    <td>{{ drink.strDrink }}</td>
                    <td>{{ drink.strCategory }}</td>
                    <td>{{ drink.strGlass }}</td>
                    <td>{{ drink.strInstructions }}</td>
                    <td><img :src="drink.strDrinkThumb" style="width:100%" alt=""></td>
                </tr>
            </tbody>
        </table>
        </div>
            <nav class="pagination" id="pagination">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                <a class="page-link" href="#">1</a>
                <a class="page-link" href="#">2</a>
                <a class="page-link" href="#">3</a>
                <a class="page-link" href="#">4</a>
                <a class="page-link" href="#">5</a>
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
</nav>
    </div>
</template>

<script>
import ShowTime from '@/components/ShowTime.vue'

export default {
  data () {
    return {
      API: 'https://www.thecocktaildb.com/api/json/v1/1',
      drinks: []
    }
  },
  methods: {
    getManyDrinks () {
      fetch(`${this.API}/search.php?s=`)
        .then(response => response.json())
        .then(data => {
          this.drinks = data.drinks
        })
    },
    drinkSelected (id) {
      this.$router.push(`/details/${id}`)
    }
  },
  components: {
    ShowTime
  },
  mounted () {
    this.getManyDrinks()
  },
  computed: {
    paginatedDrinks () {
      return this.drinks.slice(0, 5)
    },
    paginatedDrinks2 () {
      return this.drinks.slice(5, 10)
    },
    paginatedDrinks3 () {
      return this.drinks.slice(10, 15)
    }
  }
}

</script>

<style>
#list-container {
 max-width: none;
 width:100%;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.list-drinks{
  margin-top: 20px;
  max-width: 1200px;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.list-drinks table tr td {
  color:white !important;
  border-bottom: 1px solid #ff0080;
  padding: 10px;
}
.list-drinks table #tbody tr:hover {
  background-color: #ff0080;
}
table{
  width: 100%;
  background: rgba(2, 2, 2, 0.507);
}
table thead{
  color:white;
  background-color: #000000;
}
table thead th{
  padding: 10px;
  text-align: left;
}
  table thead th:hover{
    color: #ff0080;
  }
table tbody td img{
  width: 100px;
  clip-path: circle(50% at 50% 50%);

}
table tbody td:hover img{
  width: 100px;
  clip-path: circle(50% at 50% 50%);
  transform: scale(1.3);
}

.pagination .page-link {
color: white;
font-weight: bold;
background-color: black;
border: none;
}
.pagination .page-link:hover{
color: #ff0080;
}

</style>
