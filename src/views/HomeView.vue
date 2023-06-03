<template>
  <v-app>
    <v-main>
      <v-container fluid class="content">
        <div class="slideshow">
          <transition-group name="fade" mode="out-in">
            <img :key="currentImage" :src="getCurrentImage" alt="Slideshow Image" class="image-size" />
          </transition-group>
        </div>
        <div class="dots">
          <span v-for="(image, index) in images" :key="index" @click="changeImage(index)" :class="{ active: currentImage === index }"></span>
        </div>
      </v-container>
    </v-main>
    <v-footer>
  <v-container>
    <div class="social-media">
      <div class="links">
        <span>Follow Us</span>
        <a href="https://www.facebook.com/yourpage" target="_blank"
          @mouseover="facebookTextColor = '#1877F2'"
          @mouseleave="facebookTextColor = 'white'"
          :style="{ color: facebookTextColor, fontSize: '20px', fontWeight: 'bold' }">
          <v-icon size="24" :color="facebookColor">Facebook</v-icon>
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank"
          @mouseover="instagramTextColor = '#833AB4'"
          @mouseleave="instagramTextColor = 'white'"
          :style="{ color: instagramTextColor, fontSize: '20px', fontWeight: 'bold' }">
          <v-icon size="24" :color="instagramColor">Instagram</v-icon>
        </a>
        <a href="https://www.daraz.com/yourpage" target="_blank"
          @mouseover="darazTextColor = '#1DA1F2'"
          @mouseleave="darazTextColor = 'white'"
          :style="{ color: darazTextColor, fontSize: '20px', fontWeight: 'bold' }">
          <v-icon size="24" :color="darazColor">Twitter</v-icon>
        </a>
      </div>
    </div>
  </v-container>
</v-footer>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/welcome.png'),
        require('@/assets/flashsale.png'),
        require('@/assets/15off.png')
      ],
      currentImage: 0,
      facebookColor: 'black',
      instagramColor: 'black',
      darazColor: 'black',
      facebookTextColor: 'white',
      instagramTextColor: 'white',
      darazTextColor: 'white'
    };
  },
  computed: {
    getCurrentImage() {
      return this.images[this.currentImage];
    }
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      setInterval(() => {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      }, 3000); // Change image every 3 seconds (adjust as needed)
    },
    changeImage(index) {
      this.currentImage = index;
    }
  }
};
</script>

<style scoped>
.content {
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slideshow img {
  transition: opacity 0.2s;
  width: 283px; /* Calculated pixel value for 20cm at 96dpi */
  height: 283px; /* Calculated pixel value for 20cm at 96dpi */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.dots {
  text-align: center;
  margin-top: 10px;
}

.dots span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;
}

.dots span.active {
  background-color: blue;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media .links {
  position: relative;
}

.social-media a {
  margin: 0 10px;
  position: relative;
  z-index: 1;
  margin: 0 10px;
  position: relative;
  z-index: 1;
  font-weight: bold;
  font-size: 20px; /* Adjust the font size as needed */
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;
  width: 100%;
  height: 100px;
}

</style>
