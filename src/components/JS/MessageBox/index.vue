<template>
    <div class="MessageBox">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div>
            <div @touchstart="handleCancel">{{ cancel }}</div>
            <div @touchstart="handleOk">{{ ok }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'MessageBox',

}
</script>

<style scoped>
    .MessageBox {
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        box-shadow: 3px 3px 3px 3px #ccc;
        position: absolute;
        left:50%;
        top:50%;
        margin:-60px 0 0 -100px
    }
    .MessageBox h2{
        text-align: center;
        line-height: 40px;
        font-size: 18px;
    }
    .MessageBox p{
        text-align: center;
        line-height: 40px;
    }
    .MessageBox > div{
        display: flex;
        position: absolute;
        width: 100%;
        bottom: 0;
        border-top: 1px solid #ccc;
    }
    .MessageBox >div div{
        flex: 1; 
        text-align: center;
        line-height: 30px;
        border-right: 1px solid #ccc;
    }
    .MessageBox >div div:last-child{
        border: none;
    }
</style>
