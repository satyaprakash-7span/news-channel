<template>
  <div>
    <div
      class="w-full h-auto carousel"
      data-flickity='{ "freeScroll": true, "cellAlign": "left", "contain": true, "autoScroll": true}'
    >
      <div class="px-4 py-4 carousel-cell">
        <img src="../assets/health-img.jpeg" alt="" class="w-full rounded-md" />

        <div class="mx-auto mt-4 mb-4 border border-gray-200 max-w-7xl"></div>

        <h1
          class="
            font-serif
            text-xl
            font-bold
            text-center text-black
            sm:text-2xl
            lg:text-5xl
          "
        >
          Health News
        </h1>
        <p
          class="
            mt-4
            text-sm
            font-normal
            text-center text-gray-500
            sm:text-base
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem porro maiores expedita tempora asperiores, tenetur
          optio sequi rerum impedit sit?
        </p>
      </div>

      <div class="px-4 py-4 carousel-cell">
        <img
          src="../assets/politics-img.jpeg"
          alt=""
          class="w-full rounded-md"
        />

        <div class="mx-auto mt-4 mb-4 border border-gray-200 max-w-7xl"></div>

        <h1
          class="
            font-serif
            text-xl
            font-bold
            text-center text-black
            sm:text-2xl
            lg:text-5xl
          "
        >
          Politics News
        </h1>
        <p
          class="
            mt-4
            text-sm
            font-normal
            text-center text-gray-500
            sm:text-base
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem porro maiores expedita tempora asperiores, tenetur
          optio sequi rerum impedit sit?
        </p>
      </div>

      <div class="px-4 py-4 carousel-cell">
        <img src="../assets/hd-news.jpeg" alt="" class="w-full rounded-md" />
        <div class="mx-auto mt-4 mb-4 border border-gray-200 max-w-7xl"></div>
        <h1
          class="
            font-serif
            text-xl
            font-bold
            text-center text-black
            sm:text-2xl
            lg:text-5xl
          "
        >
          Politics News
        </h1>
        <p
          class="
            mt-4
            text-sm
            font-normal
            text-center text-gray-500
            sm:text-base
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem porro maiores expedita tempora asperiores, tenetur
          optio sequi rerum impedit sit?
        </p>
      </div>

      <div class="px-4 py-4 carousel-cell">
        <img src="../assets/sports-img.jpeg" alt="" class="w-full rounded-md" />
        <div class="mx-auto mt-4 mb-4 border border-gray-200 max-w-7xl"></div>
        <h1
          class="
            font-serif
            text-xl
            font-bold
            text-center text-black
            sm:text-2xl
            lg:text-5xl
          "
        >
          Sport News
        </h1>
        <p
          class="
            mt-4
            text-sm
            font-normal
            text-center text-gray-500
            sm:text-base
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem porro maiores expedita tempora asperiores, tenetur
          optio sequi rerum impedit sit?
        </p>
      </div>

      <div class="px-4 py-4 carousel-cell">
        <img src="../assets/edu-img.jpeg" alt="" class="w-full rounded-md" />
        <div class="mx-auto mt-4 mb-4 border border-gray-200 max-w-7xl"></div>
        <h1
          class="
            font-serif
            text-xl
            font-bold
            text-center text-black
            sm:text-2xl
            lg:text-5xl
          "
        >
          Education News
        </h1>
        <p
          class="
            mt-4
            text-sm
            font-normal
            text-center text-gray-500
            sm:text-base
          "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem porro maiores expedita tempora asperiores, tenetur
          optio sequi rerum impedit sit?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css">
/* external css: flickity.css */
.carousel-cell {
  width: 100%;
  height: 700px;
  margin-right: 0px;
  border-radius: 5px;
  bottom: 0;
  top: -75px;
  counter-increment: gallery-cell;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 150px;
  font-size: 80px;
  color: white;
}

.flickity-prev-next-button.previous {
  left: 20px;
  margin-top: -3%;
}

.flickity-prev-next-button.next {
  margin-top: -3%;
  right: 20px;
}

.animated {
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@media screen and (min-width: 768px) {
  .carousel img {
    height: 400px;
  }
}
</style>
