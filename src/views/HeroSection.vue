<template>
  <div>
    <div class="relative py-10 mt-12 sm:py-20">
      <div class="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div class="absolute inset-0">
            <img
              class="object-cover w-full h-full"
              src="../assets/global-img.jpeg"
              alt="People working on laptops"
            />
            <div
              class="absolute inset-0  bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"
            />
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1
              class="text-4xl font-extrabold tracking-tight text-center  sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white"
                >Get up to date with Top Headlines</span
              >
              <span class="block text-indigo-200">Our News report</span>
            </h1>
            <p
              class="max-w-lg mx-auto mt-6 text-xl text-center text-indigo-200  sm:max-w-3xl"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              error illum fugit accusantium optio delectus, quos atque assumenda
              ab praesentium iure quibusdam nesciunt explicabo veniam ipsa a
              blanditiis cumque totam!
            </p>
            <div
              class="max-w-sm mx-auto mt-10  sm:max-w-none sm:flex sm:justify-center"
            >
              <div
                class="space-y-4  sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5"
              >
                <router-link
                  to="/news/news-index"
                  class="flex items-center justify-center px-6 py-3 text-base font-medium text-indigo-700 transition-all duration-700 ease-in-out transform bg-white border border-transparent rounded-md shadow-sm  sm:text-lg hover:shadow-lg hover:scale-110 hover:text-white hover:scale-90 hover:border hover:border-white hover:bg-transparent sm:px-8"
                >
                  Get started
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Logo Cloud -->
    <div class="bg-gray-100">
      <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <p
          class="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase "
        >
          Trusted by over 5 very average small businesses
        </p>
        <div class="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5">
          <div
            class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1"
          >
            <img
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
              class="h-12 transition-all ease-in-out transform cursor-pointer  duration-600 hover:scale-110"
            />
          </div>
          <div
            class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12 transition-all ease-in-out transform cursor-pointer  duration-600 hover:scale-110"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div
            class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1"
          >
            <img
              class="h-12 transition-all ease-in transform cursor-pointer  duration-600 hover:scale-110"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div
            class="flex justify-center col-span-1  md:col-span-2 md:col-start-2 lg:col-span-1"
          >
            <img
              class="h-12 transition-all ease-in-out transform cursor-pointer  duration-600 hover:scale-110"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div
            class="flex justify-center col-span-2  md:col-span-2 md:col-start-4 lg:col-span-1"
          >
            <img
              class="h-12 transition-all ease-in-out transform cursor-pointer  duration-600 hover:scale-110"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
