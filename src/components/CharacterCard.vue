<script setup>
import { ref } from 'vue'
defineProps(["character"])

</script>

<template>
    <div class="card">
                    <div class="card-header">
                        <p class="card-header-title">
                            {{character.name}}
                        </p>
                    </div>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="character.image" alt="Character image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Status</th>
                                        <td>{{character.status}}</td>
                                    </tr>
                                    <tr>
                                        <th>Species</th>
                                        <td>{{character.species}}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>{{character.gender}}</td>
                                    </tr>
                                    <tr>
                                        <th>Origin</th>
                                        <td>{{character.origin.name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>{{character.location.name}}</td>
                                    </tr>
                                    <tr>
                                        <th>Episodes</th>
                                        <td>{{character.episode.length}}</td>
                                    </tr>
                                    <tr>
                                        <th>Type</th>
                                        <td>{{character.type ? character.type : 'Unknown'}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
</template>