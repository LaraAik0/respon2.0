<template>
    <div>
        <div class="secao">
            <div class="subsecao">
                <div v-if="isLoading" class="skeleton"></div>
                <img v-else width="60%" class="imagemUnica" loading="lazy" :src="require('@/assets/a1.jpg')" @load="isLoading = false" />
            </div>
        </div>
        <div class="secao">
            <div class="subsecao">
                <img width="60%" class="imagemNaoUnica" loading="lazy" :src="require('@/assets/b1.jpg')" />
            </div>
            <div class="subsecao">
                <img width="60%" class="imagemNaoUnica" loading="lazy" :src="require('@/assets/c1.jpg')" />
            </div>
            <div class="subsecao">
                <img width="60%" class="imagemNaoUnica" loading="lazy" :src="require('@/assets/d1.jpg')" />
            </div>
            <div class="subsecao">
                <img width="60%" height="680px" loading="lazy" class="imagemNaoUnica" :src="require('@/assets/e1.jpg')" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'imagemDiversos',
    data() {
        return {
            isLoading: true // Inicializa como true para mostrar o skeleton
        };
    },
    props: {
        msg: String
    }
}
</script>

<style>
</style>
