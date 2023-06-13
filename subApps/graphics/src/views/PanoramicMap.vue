<template>
    <div class="container" red="container"></div>
</template>
<script setup lang="ts">
import * as THREE from 'three';
import { ref, onMounted } from 'vue';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)

const container = ref(null);

onMounted(() => {
    container && container.value && container.value.appendChild(renderer.domElement);
})
</script>
<style></style>