<template>
    <div>
        <div class="secao">
            <div class="subsecao">
                <img class="imagemUnica" src="@/assets/azul.jpg" />
            </div>
        </div>
        <div class="secao">
            <div class="subsecao">
                <img class="imagemNaoUnica" src="@/assets/preta.jpg" />
            </div>
            <div class="subsecao">
                <img class="imagemNaoUnica" src="@/assets/vermelha.jpg" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'imagemDiversos',
        props: {
            msg: String
        }
    }
</script>

<style></style>