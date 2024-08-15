<template>
    <v-container class="fill-height">
        <v-row align="start">
            <v-col cols="12">
                <v-form>
                    <v-text-field clearable placeholder="Enter your username" color="#1E9FFF" variant="outlined">
                        <template v-slot:prepend-inner>
                            <v-icon icon="mdi-account-outline" size="large" />
                        </template>
                    </v-text-field>
                    <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                        color="#1E9FFF"></v-text-field>
                    <v-row align="start">
                        <v-col cols="12" md="8">
                            <v-text-field prepend-inner-icon="mdi-check-decagram-outline" color="#1E9FFF"
                                placeholder="Verification code" variant="outlined">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-img :src="base64Url"></v-img>
                        </v-col>
                    </v-row>
                    <v-btn block color="#1E9FFF" size="large">
                        LOGIN
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { getRandomImage } from '@/api'
export default {
    data: () => ({
        visible: false,
        base64Url: ''
    }),

    mounted() {
        this.getRandomCode();
    },

    methods: {
        getRandomCode() {
            let p = getRandomImage()
            p.then(result => {
                console.log(result); // 输出: Promise resolved!
                this.base64Url = result;
            }).catch(error => {
                console.error(error);
            });
        }
    }
}
</script>