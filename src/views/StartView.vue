
<template>
    <div class="fadeClass">
        <p class="text-center mb-4 text-uppercase text-cyanG font-weight-bold splitter">
            Spli <br/>tter
        </p>
        <div class="d-flex justify-center">
            <v-btn to="/tip_calculator" color="primary" class="start elevation-0">Start</v-btn>
        </div>
    </div>
</template>

<style lang="scss">
    .splitter{
        font-size: 6rem ;
        margin-top: 2rem;
    }
    .start{
        width: 14rem !important;
    }
    .fadeClass{
        animation: fadeIn 2000ms ease;
        animation-fill-mode: backwards;
    }
    @keyframes fadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

</style>