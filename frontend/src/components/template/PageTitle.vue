<template>
    <div class="page-title">
        <h4><i v-if="icon" :class="icon">{{ main }}</i></h4>
        <h6>{{ sub }}</h6>
        <hr>
    </div>
</template>

<script>
export default {
    name:'PageTitle',
    props:['icon','main','sub']

}
</script>

<style>
.page-title h1 {
    margin: 0px;
}
.page-title h2 {
    color: #777;
    margin-top:5px;
    font-size: 1.3rcm;
}
</style>