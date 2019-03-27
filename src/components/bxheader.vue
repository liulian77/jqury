<template>
    <div class="bxheader"><img class='logo' src="../img/logo.png">
<router-link to='/search' class="bxsearch">
<div class="search">
搜索
</div>
</router-link>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
html{
font-size: 62.5%;
}
.bxheader{
    height: 2.9rem;
    line-height: 45px;
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;

}
.bxlogo{
    display: block;
    font-size: 32px;
    color:white;
    font-family:'楷体';
    align-self: center;
}
.bxsearch{
    width: 70%;
    height: 2rem;
    background: #dedede;
    margin-left: 0.5rem;
    margin-top:0.5rem;
    text-decoration: none;
    border-radius: 0.5rem;
}
.search{
padding-left: 1rem;
text-decoration: none;
font-size: 1.5rem;
color: black;
line-height: 1.5rem;
padding-top: 0.3rem;
}
.logo{
width: 20%;
height: 80%;
margin-top: 0.4rem;
}

</style>
