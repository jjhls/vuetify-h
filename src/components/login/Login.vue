<template>
    <v-container class="fill-height overflow-hidden">
        <v-row justify="center">
            <v-col cols="auto">
                <v-card width="400" height="450" elevation="4">
                    <v-card-item>
                        <v-row justify="center">
                            <v-col cols="auto">
                                <v-avatar color="info" size="60">
                                    <v-icon icon="mdi-account-circle"></v-icon>
                                </v-avatar>
                            </v-col>
                        </v-row>
                    </v-card-item>
                    <v-card-item>
                        <LoginForm />
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>