<template>
    <div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div{
        position: absolute;
        width: 200px;
        height: 200px;
        background: url("../assets/20200109152754773.png") no-repeat;
        animation:  bear .4s steps(8) infinite, move 3s linear forwards;
        border-color: #ccc;
        top:50%;
    }
    @keyframes bear {
        0%{
            background-position: 0 0;
        }
        100%{
            background-position: -1600px 0;
        }
    }

    @keyframes move {
        0% {
            left: 0;
        }
        100% {
            left: 50%;
        }
    }
</style>
