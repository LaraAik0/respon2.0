<template>
    <div>
        <div class="secao">
            <div class="subsecao">
                <img  width="60%" class="imagemUnica"  loading="lazy" src="@/assets/a.jpg" />
            </div>
        </div>
        <div class="secao">
            <div class="subsecao">
                <img  width="60%" class="imagemNaoUnica" loading="lazy" src="@/assets/b.jpg" />
            </div>
            <div class="subsecao">
                <img width="60%" class="imagemNaoUnica" loading="lazy" src="@/assets/c.jpg" />
            </div>
            <div class="subsecao" >
                <img width="60%" class="imagemNaoUnica" loading="lazy" src="@/assets/d.jpg" />
            </div>
            <div class="subsecao">
                <img  width="60%" height="680px" loading="lazy" class="imagemNaoUnica" src="@/assets/e.jpg" />
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