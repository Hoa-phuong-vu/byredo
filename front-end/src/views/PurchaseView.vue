<template>
    <div class="purchase">
        <img src="@/assets/check.png" class="check">
        <h3> Thank you for purchasing</h3>
        <router-link to="/products">
            <button>CONTINUE SHOPPING</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'PurchaseView',
}
</script>

<style>
.purchase {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
}

.check {
    width: 15em;
}


</style>