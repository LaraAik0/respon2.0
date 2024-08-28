<template><table border="1">
    <tr>
        <td>Joaninha</td>
        <td>Vermelha</td>
        <td>Pintinhas pretas</td>
    </tr>
    <tr>
        <td>Joaninha</td>
        <td>Preta</td>
        <td>Pintinhas brancas</td>
    </tr>
    <tr>
        <td>Joaninha</td>
        <td>Azul</td>
        <td>Pintinhas pretas</td>
    </tr>
    <tr>
        <td>Video sobre Joaninhas</td>
        <td>Informativo</td>
        <td><img width="60px" src="@/assets/vermelha.jpg"/></td>
    </tr>
</table>
</template>

<script>
    export default {
        name: 'tabelaUnica',
        props: {
            msg: String
        }
    }
</script>

<style></style>