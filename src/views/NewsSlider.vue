<template>
  <div>
    <div
      class="w-full h-auto carousel"
      data-flickity='{ "freeScroll": true, "cellAlign": "left", "contain": true, "autoScroll": true}'
    >
      <div class="relative carousel-cell">
        <img
          src="../assets/health-img.jpeg"
          alt=""
          class="relative z-10"
          style="height: 600px; width: 100%"
        />

        <div
          class="absolute bottom-0 z-40 w-full bg-yellow-400 rounded-md shadow-lg  bg-opacity-20"
        >
          <div class="w-full px-6 py-4 mx-auto text-center max-w-7xl">
            <h1
              class="font-serif text-xl font-bold text-center text-blue-600  sm:text-2xl lg:text-5xl"
            >
              Health News
            </h1>
            <p
              class="mt-4 mb-4 text-sm font-normal text-center text-white  sm:text-lg"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem porro maiores expedita tempora asperiores, tenetur
              optio sequi rerum impedit sit?
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 carousel-cell">
        <img
          src="../assets/politics-img.jpeg"
          class="relative z-10"
          alt=""
          style="height: 600px; width: 100%"
        />

        <div
          class="absolute bottom-0 z-40 w-full bg-yellow-400 rounded-md shadow-lg  bg-opacity-20"
        >
          <div class="w-full px-6 py-4 mx-auto text-center max-w-7xl">
            <h1
              class="font-serif text-xl font-bold text-center text-white  sm:text-2xl lg:text-5xl"
            >
              Politics News
            </h1>
            <p
              class="mt-4 mb-4 text-sm font-normal text-center text-white  sm:text-lg"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem porro maiores expedita tempora asperiores, tenetur
              optio sequi rerum impedit sit?
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 carousel-cell">
        <img
          src="../assets/hd-news.jpeg"
          alt=""
          class="relative z-10"
          style="height: 600px; width: 100%"
        />
        <div
          class="absolute bottom-0 z-40 w-full bg-yellow-400 rounded-md shadow-lg  bg-opacity-20"
        >
          <div class="w-full px-6 py-4 mx-auto text-center max-w-7xl">
            <h1
              class="font-serif text-xl font-bold text-center text-white  sm:text-2xl lg:text-5xl"
            >
              Top Headlines News
            </h1>
            <p
              class="mt-4 mb-4 text-sm font-normal text-center text-white  sm:text-lg"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem porro maiores expedita tempora asperiores, tenetur
              optio sequi rerum impedit sit?
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 carousel-cell">
        <img
          src="../assets/sports-img.jpeg"
          class="relative z-10"
          alt=""
          style="height: 600px; width: 100%"
        />
        <div
          class="absolute bottom-0 z-40 w-full bg-yellow-400 rounded-md shadow-lg  bg-opacity-20"
        >
          <div class="w-full px-6 py-4 mx-auto text-center max-w-7xl">
            <h1
              class="font-serif text-xl font-bold text-center text-white  sm:text-2xl lg:text-5xl"
            >
              Sports News
            </h1>
            <p
              class="mt-4 mb-4 text-sm font-normal text-center text-white  sm:text-lg"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem porro maiores expedita tempora asperiores, tenetur
              optio sequi rerum impedit sit?
            </p>
          </div>
        </div>
      </div>

      <div class="px-4 py-4 carousel-cell">
        <img
          src="../assets/edu-img.jpeg"
          class="relative z-10"
          style="height: 600px; width: 100%"
          alt=""
        />
        <div
          class="absolute bottom-0 z-40 w-full bg-yellow-400 rounded-md shadow-lg  bg-opacity-20"
        >
          <div class="w-full px-6 py-4 mx-auto text-center max-w-7xl">
            <h1
              class="font-serif text-xl font-bold text-center text-white  sm:text-2xl lg:text-5xl"
            >
              Education News
            </h1>
            <p
              class="mt-4 mb-4 text-sm font-normal text-center text-white  sm:text-lg"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem porro maiores expedita tempora asperiores, tenetur
              optio sequi rerum impedit sit?
            </p>
          </div>
        </div>
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
}

.flickity-prev-next-button.next {
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
