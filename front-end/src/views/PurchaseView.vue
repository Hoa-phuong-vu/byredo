<template>
    <div class="purchase">
        <img src="@/assets/check.png">
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