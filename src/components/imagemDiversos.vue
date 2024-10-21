<template>
    <div>
        <div class="secao">
            <div class="subsecao">
                <img  width="60%" class="imagemUnica"  loading="lazy" src="@/assets/a1.jpg" />
            </div>
        </div>
        <div class="secao">
            <div class="subsecao">
                <img  width="60%" class="imagemNaoUnica" loading="lazy" src="@/assets/b1.jpg" />
            </div>
            <div class="subsecao">
                <img width="60%" class="imagemNaoUnica" loading="lazy" src="@/assets/c1.jpg" />
            </div>
            <div class="subsecao" >
                <img width="60%" class="imagemNaoUnica" loading="lazy" src="@/assets/d1.jpg" />
            </div>
            <div class="subsecao">
                <img  width="60%" height="680px" loading="lazy" class="imagemNaoUnica" src="@/assets/e1.jpg" />
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

<style scoped>
.img-container{
    display: flex;
    gap: 10px;
}

.img-container img{
    width: 30%;
}
</style>