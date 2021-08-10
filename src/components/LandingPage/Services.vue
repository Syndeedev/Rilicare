<template>
  <div class="mainn py-4">
    <div class="container">
      <div class="text-center">
        <h3 class="text-3xl font-bold">Our Services</h3>
        <div class="flex justify-center items-center mt-7">
          <img src="../../assets/Rectangle.png" />
        </div>

        <p class="md:mx-10 my-7">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div class="flex mt-20 items-center flex-wrap justify-center">
        <div v-for="(service, index) in Services" :key="index">
          <div>
            <div class="bg-white flex flex-col justify-around p-8 w-80 h-80 m-3 shadow-lg rounded-xl">
              <div class="w-14 md:w-16">
                <img :src="`${service.image}`" alt="none" />
              </div>

              <h3 class="font-bold text-2xl">{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center my-6">
        <button class="btn">Learn more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data(){
    return{
      Services:[
        {
          title:"Search Doctor",
          description: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
          image: require( '../../assets/servicesIcons/SearchDoctor.png' )
        },
        {
          title:"Online Pharmacy",
          description: "Buy your medicines with our mobile application with a simple delivery system",
          image: require( '../../assets/servicesIcons/pillsBox.png' )
        },
        {
          title:"Consultation",
          description: "Free consultation with our trusted doctors and get the best recomendations",
          image: require( '../../assets/servicesIcons/consultation.png' )
        },
        {
          title:"Details Info",
          description: "Free consultation with our trusted doctors and get the best recomendations",
          image: require( '../../assets/servicesIcons/detailsInfo.png' )
        },
        {
          title:"Emergency Care",
          description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
          image: require( '../../assets/servicesIcons/emergency.png' )
        },
        {
          title:"Tracking",
          description: "Track and save your medical history and health data ",
          image: require( '../../assets/servicesIcons/tracking.png' )
        },
      ]
    }
  }
};
</script>

<style scoped>
.mainn {
  background: url("../../assets/GroupElement.png") no-repeat;
}
</style>
