<script>



</script>


<template>
    <div class="tips align-center">
        <v-card>
            <div class="d-flex">
                <v-col cols="6 pa-6">
                    <p class="subtitle text-capitalize font-weight-bold text-gray mb-1">bill</p>
                    <v-text-field v-model="billInput" class="elevation-0 lightInputs" variant='solo' density="comfortable">
                        <template v-slot:prepend-inner>
                            <v-icon
                                icon="mdi-currency-usd"
                            />
                        </template>
                    </v-text-field>
                    <p class="subtitle text-capitalize font-weight-bold text-gray mt-3">Select Tip %</p>
                    <div class="d-flex justify-space-around">
                        <v-btn class="ma-2 bg-secondary font-weight-bold">5%</v-btn>
                        <v-btn class="ma-2 bg-secondary font-weight-bold">10%</v-btn>
                        <v-btn class="ma-2 bg-secondary font-weight-bold">15%</v-btn>
                    </div>
                    <div class="d-flex justify-space-around">
                        <v-btn class="ma-2 bg-secondary font-weight-bold">25%</v-btn>
                        <v-btn class="ma-2 bg-secondary font-weight-bold">50%</v-btn>
                        <v-btn class="ma-2 bg-veryLCyan font-weight-bold text-gray">Custom</v-btn>
                    </div>


                    <p class="subtitle text-capitalize font-weight-bold text-gray mt-3 mb-1">Number of People</p>
                    <v-text-field v-model="billInput" class="elevation-0" hide-details variant='solo' density="comfortable">
                        <template v-slot:prepend-inner>
                            <v-icon
                                icon="mdi-account"
                            />
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="6" class="pa-6">
                    <v-row justify="space-between" class="darkcard pr-8 pl-8" style="align-items: center;">
                        <div class="mt-4 w-100">
                            <div class="d-flex pt-2 pb-2">
                                <v-col class="">
                                    <p class="text-capitalize text-white font-weight-bold" color="white">tip amount</p>
                                    <p class="text-lCyan font-weight-bold person">/ person</p>
                                </v-col>
                                <v-col class="text-right">
                                    <p class="num">$0.00</p>
                                </v-col>
                            </div>
                            <div class="d-flex pt-2 pb-2">
                                <v-col cols="6" class="">
                                    <p class="text-capitalize text-white font-weight-bold" color="white">total</p>
                                    <p class="text-lCyan font-weight-bold person">/ person</p>
                                </v-col>
                                <v-col cols="6" class="text-right">
                                    <p class="num">$0.00</p>
                                </v-col>
                            </div>
                        </div>
                        <v-btn
                            variant="flat"
                            block
                            color="primary"
                            class="font-weight-bold mb-4 mt-6"
                        >
                            Reset
                        </v-btn>
                    </v-row>
                </v-col>
            </div>
        </v-card>
    </div>
</template>

<style lang="scss">
.tips{
    max-width: 54rem;
    margin-left: auto;
    margin-right: auto;
    .darkcard{
        background-color: var(--secondary);
        border-radius: 20px;
        height: 22rem;
        .num{
            font-size: 2.5rem !important;
            font-weight: 600;
            line-height: 2rem;
            color: var(--primary);
            letter-spacing: normal !important;
            font-family: 'Space Mono', monospace !important;
            text-transform: none !important;
        }
        .person{
            font-size: 0.8rem;
        }
    }
}
</style>