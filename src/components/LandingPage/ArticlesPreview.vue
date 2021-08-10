<template>
  <div class="mainn py-4">
    <div class="container">
      <div class="text-center">
        <h3 class="text-3xl font-bold">Checkout our latest article</h3>
        <div class="flex justify-center items-center mt-7">
          <img src="../../assets/Rectangle.png" />
        </div>
      </div>
      <div>


        <div class="flex mt-8 items-center flex-wrap justify-center">
          <div v-for="(service, index) in Services" :key="index">
            <div>
              <div  class="bg-white h-auto flex flex-col w-72 m-3 shadow-lg rounded-xl">

                <div class="">
                  <img class="rounded-tr-lg rounded-tl-lg" :src="`${service.image}`" alt="none" />
                </div>

                <div class="px-6">
                <h3 class="font-bold py-4 text-1xl">{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                  <div class="flex items-center justify_center">
                    <p class="text-rili-care-blue pr-2 py-4">Read more</p>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.37501 5.30406L11.9822 5.30406L9.65179 7.63442C9.33037 7.95584 9.33037 8.43799 9.65179 8.75942C9.97322 9.08085 10.4554 9.08085 10.7768 8.75942L14.4732 5.06299C14.7947 4.74156 14.7947 4.25942 14.4732 3.93799L10.7768 0.24156C10.4554 -0.0798696 9.97322 -0.0798697 9.65179 0.24156C9.33037 0.562988 9.33037 1.04513 9.65179 1.36656L11.9822 3.69692L1.37501 3.69692C0.973222 3.69692 0.571436 4.01834 0.571436 4.50049C0.571436 4.98263 0.973222 5.30406 1.37501 5.30406Z" fill="#4089ED"/>
                    </svg>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center my-6">
        <button class="btn">View all</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesPreview",
  data(){
    return{
      Services:[
        {
          title:"Disease detection, check up in the laboratory",
          description: "In this case, the role of the health laboratory is very important to do a disease detection...",
          image: require( '../../assets/detection.png' )
        },
        {
          title:"Herbal medicines that are safe for consumption",
          description: "Herbal medicine is very widely used at this time because of its very good for your health...",
          image: require( '../../assets/lab.png' )
        },
        {
          title:"Natural care for healthy facial skin",
          description: "A healthy lifestyle should start from now and also for your skin health. There are some...",
          image: require( '../../assets/natural-care.png' )
        }
        ]
    }
  }
};
</script>

<style scoped>
.mainn {
  background: url("../../assets/latest-article-bg.png") no-repeat;
  background-size: cover;
}
.article-pic{
  background: url("../../assets/latest-article-bg.png") no-repeat;
  background-size: cover;
}

</style>