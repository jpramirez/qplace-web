<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Service Plans</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://s3-sa-east-1.amazonaws.com/uploads-astrocentro/blog/wp-content/uploads/2017/11/23164357/Como-limpar-a-aura-.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >Free</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">STARTER</h3>
                            <br>
                            <div>
                                <ul>
                                <li>Upload up to 10MB Sound Files in Wav format.</li>
                                <li>They will be saved for a week.</li>
                                <li>500MB total Storage.</li>
                                <li>Up to 1 Minute proof reading technology</li>
                                </ul>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('keto')"
                            data-cy="plansKetoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://spiritualquestions.org.uk/wp-content/uploads/2014/08/aura.jpg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >BASIC</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">BASIC</h3>
                            <div>
                                <ul>
                                <li>Upload up to 100 Megabytes files in wav or mp3.</li>
                                <li>Convert MP3 to Wav.</li>
                                <li>Run Voice Analytics and Script proof Reading. </li>
                                <li>Up to 10GB free storage. </li>
                                <li>Unlimited Downloads </li>
                                </ul>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                            @click="showRecipes('paleo')"
                            data-cy="plansPaleoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="https://s3.amazonaws.com/anmolmehta/wp-content/uploads/20180131171809/Free-Meditation-Music-MP3-Downloads.jpeg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >FULL</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">PRO</h3>
                            <div>
                                <ul>
                                <li>Unlimited file size audio format </li>
                                <li>Unlimited Audio storage.</li>
                                <li>No Limitations.</li>
                                <li>Convert between Formats Fast and reliably.</li>
                                <li>Unlimited Downloads.</li>
                                <li>Unlimited proof reading services.</li>
                                </ul>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn
                            outline
                            block
                            color="green"
                           @click="showRecipes('vegan')"
                            data-cy="plansVeganBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            this.$store.dispatch('getItems', plan);
        }
    }
};
</script>

<style scoped></style>
