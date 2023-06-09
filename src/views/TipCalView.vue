<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return{
            bill: '',
            numOfPeople: '',
            tipAmount: 0,
            total: 0,
            customBtn: false,
            custom: '',
            percent: '',
            error: false,
        }
    },
    methods: {
        Percent(p){
            this.customBtn = false;
            this.percent = String(p);
        },
        Split(){
            if(this.bill && this.numOfPeople && this.tipAmount != null || undefined || 0 ){
                const tip = Number(this.percent) * Number(this.bill) / 100;
                this.tipAmount = tip / Number(this.numOfPeople);
                this.total = Number(this.bill) / Number(this.numOfPeople) + tip;
            } else {
                this.error = true
                setTimeout(() => {
                    this.error = false
                }, "4000");
            }
        },
        Reset(){
            this.bill = '';
            this.numOfPeople = '';
            this.tipAmount = 0;
            this.total = 0;
            this.custom = '';
            this.percent = '';
            this.customBtn = false;
        },
    },
})

</script>


<template>
    <div class="tips align-center">
        <p class="text-center mb-4 text-uppercase text-cyanG font-weight-bold splitter">
            Spli <br/>tter
        </p>

        <v-card class="waitCard">
            <div class="d-flex colDirection">
                <v-col md="6" sm="auto" class="pa-6">
                    <p class="subtitle text-capitalize font-weight-bold text-gray mb-1">bill</p>
                    <v-text-field placeholder="0" v-model="bill" class="elevation-0 lightInputs" variant='solo' density="comfortable" type="number">
                        <template v-slot:prepend-inner>
                            <v-icon
                                icon="mdi-currency-usd"
                            />
                        </template>
                    </v-text-field>
                    <p class="subtitle text-capitalize font-weight-bold text-gray mt-3">Select Tip %</p>
                    <div class="d-flex justify-space-around smPad">
                        <v-btn class="ma-2 bg-secondary font-weight-bold elevation-0" @click="Percent(5)">5%</v-btn>
                        <v-btn class="ma-2 bg-secondary font-weight-bold elevation-0" @click="Percent(10)">10%</v-btn>
                        <v-btn class="ma-2 bg-secondary font-weight-bold elevation-0" @click="Percent(15)">15%</v-btn>
                    </div>
                    <div class="d-flex justify-space-around smPad">
                        <v-btn class="ma-2 bg-secondary font-weight-bold elevation-0" @click="Percent(25)">25%</v-btn>
                        <v-btn class="ma-2 bg-secondary font-weight-bold elevation-0" @click="Percent(50)">50%</v-btn>
                        <v-btn v-if="!customBtn" class="ma-2 bg-veryLCyan font-weight-bold text-gray elevation-0" @click="customBtn = true" >Custom</v-btn>
                        <div class="customInput mr-2 ml-2 mb-0" v-else >
                            <v-text-field placefolder="Custom" variant="solo" class="elevation-0" type="number" density="comfortable" hide-details v-model="percent"/>
                        </div>
                    </div>


                    <p class="subtitle text-capitalize font-weight-bold text-gray mt-3 mb-1">Number of People</p>
                    <v-text-field placeholder="0" v-model="numOfPeople" class="elevation-0" hide-details variant='solo' density="comfortable" type="number">
                        <template v-slot:prepend-inner>
                            <v-icon
                                icon="mdi-account"
                            />
                        </template>
                    </v-text-field>
                </v-col>
                <v-col md="6" sm="auto" class="pa-6">
                    <v-row justify="space-between" class="darkcard pr-8 pl-8" style="align-items: center;">
                        <div class="mt-4 w-100">
                            <div class="d-flex pt-2 pb-2">
                                <v-col class="">
                                    <p class="text-capitalize text-white font-weight-bold" color="white">tip amount</p>
                                    <p class="text-lCyan font-weight-bold person">/ person</p>
                                </v-col>
                                <v-col class="text-right">
                                    <p class="num">${{tipAmount.toFixed(2)}}</p>
                                </v-col>
                            </div>
                            <div class="d-flex pt-2 pb-2">
                                <v-col class="">
                                    <p class="text-capitalize text-white font-weight-bold" color="white">total</p>
                                    <p class="text-lCyan font-weight-bold person">/ person</p>
                                </v-col>
                                <v-col class="text-right">
                                    <p class="num">${{ total.toFixed(2) }}</p>
                                </v-col>
                            </div>
                        </div>
                        <v-btn
                            variant="flat"
                            block
                            color="primary"
                            class="font-weight-bold mt-6 elevation-0"
                            @click="Split()"
                        >
                            Split Bill
                        </v-btn>
                        <v-btn
                            variant="flat"
                            block
                            color="gray"
                            class="font-weight-bold mb-4 elevation-0"
                            @click="Reset()"
                        >
                            Reset
                        </v-btn>
                    </v-row>
                </v-col>
            </div>
        </v-card>

        <v-alert
            v-if="error"
            class="alerts mt-4"
            icon="$warning"
            type="warning"
            title="You need to have a selection for each field"
        />
    </div>
</template>

<style lang="scss">
.tips{
    max-width: 60rem;
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
    .customInput{
        width: 7rem;
    }
    .alerts{
        border-radius: 10px;
        animation: fadeIn 4000ms ease-in-out;
    }

    @keyframes fadeIn{
        0%{
            opacity: 0;
        }
        25%{
            opacity: 1;
        }
        75%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }

    .waitCard{
        animation: waitC 500ms;
        animation-fill-mode: both;
        @media screen and (max-width: 960px){
            .colDirection{
                flex-direction: column;
            }
        }
    }
    @keyframes waitC{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }


    .splitter{
        animation: scaleIn 500ms;
        font-size: 1.2rem;
    }
    @keyframes scaleIn{
        from{
            font-size: 4rem;
        }
        to{
            font-size: 1.2rem;
        }
    }
}
</style>