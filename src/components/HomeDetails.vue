<template>
    <v-container fluid class="brown lighten-4">
        <v-container grid-list-lg>
            <v-layout column>
                <v-flex
                    class="display-2 font-weight-black brown--text text-xs-center my-5"
                    >How It Works</v-flex
                >
                <v-flex>
                    <div class="headline mt-3 brown--text font-weight-bold">
                        Automated silence detection
                    </div>
                    <p class="subheading mt-3">
                        Our state of the art silence detection allows you to upload
                        any kind of audio format and detect silence between sentences.
                        Its ideal to create smaller files for your audio projects cutting 
                        exactly where your scripts says.

                    </p>
                </v-flex>
                <v-flex>
                    <div class="headline mt-3 brown--text font-weight-bold">
                        Automated proof readig 
                    </div>
                    <p class="subheading mt-3">
                        Minimize time and effort by uploading your scripts and allow our 
                        cutting edge tool to analyze and proof read your audio.
                        Ideal for practicing proper english pronunciation and avoid common mistakes.
                        Our service will highlight any mistake and misspronuciation.
                    </p>
                </v-flex>
                <v-flex>
                    <div class="headline mt-3 brown--text font-weight-bold">
                        Easy file convertion
                    </div>
                    <p class="subheading mt-3">
                        Convert easy and securely your audio formats.
                        Share a link with any audio format you want for easy sharing.
                        It's fast, simple and avoid the trouble.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped></style>
