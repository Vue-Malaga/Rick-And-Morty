<template>
    <header>
        <div class="image-container">
            <img src="../assets/images/rick-morty-finger.png" alt="">
        </div>
        <h1>Wubba Lubba Dub Dub</h1>
    </header>
</template>

<script>
</script>

<style scoped>
header {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.image-container {
    height: 500px;
    width: 500px;
    overflow: hidden;
}

.image-container img {
    object-fit: cover;
    height: 100%;
}

h1 {
    font-size: 3rem;
    color: var(--white-color);
    font-family: RickAndMorty, sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
}
</style>