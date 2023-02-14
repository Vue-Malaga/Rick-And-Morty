<template>
    <figure>
        <div class="img-container">
            <img :src="image" alt="">
        </div>
        <figcaption>
            <p class="title">{{ name }}</p>
            <p><strong>Specie:</strong> {{ specie }}</p>
        </figcaption>
    </figure>
</template>

<script setup>
const props = defineProps({
    name: { type: String, required: true },
    image: { type: String, required: true },
    specie: { type: String, required: true },
});
</script>

<style scoped>
p.title {
    font-size: 1.5rem;
    max-width: 230px;
    font-weight: 700;
    margin-bottom: .5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

figure {
    color: var(--white-color);
    box-shadow: 0 0 0.5rem var(--lime-color);
    border-radius: 1rem;
    display: inline-block;
    font-family: Lato, sans-serif;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

figure:hover {
    box-shadow: 0 0 0.5rem var(--white-color);
}

.img-container {
    height: 280px;
    width: 280px;
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.685);
}

.img-container img {
    object-fit: cover;
}

figcaption {
    padding: 0.5rem 1rem;
}
</style>