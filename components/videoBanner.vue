<template>
  <section id="videoSection">
    <div class="videoBanner">
      <iframe class="videoPlayer" :src=" `https://player.vimeo.com/video/${videos[selectedVideo]}?h=69617a869e&autoplay=${shouldAutoPlay && 1}`" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h4 class="videoSelectionTitle"> Explore Our Videos </h4>
    <div class = "videoSelection">
      <button @click="previousVideo" class="backButton" />
      <ul class="videosGallery">
        <li class="videoOption" v-for="(video) in getVideoSelection()" :key="video">
          <img @click="selectVideo(video)" class="shadow" :src="`https://vumbnail.com/${videos[video]}.jpg`"/>
        </li>
      </ul>
      <button @click="nextVideo" class="forwardButton" />
    </div>
    <div class="videoGalleryControls">
      <div
        :key="i"
        :aria-selected="pagePos === i"
        v-for="(item, i) in pages"
        @click="pagePos = i"
        class="circle"
      ></div>
    </div>
    <hr class="sectionRuler" />
  </section>
</template>

<script>

export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      // Initial Video's Autoplay value.
      shouldAutoPlay: false,
      pagePos: 0,
      selectedVideo: 0,
      timeout: null,
      window: {
        width: 0,
        height: 0
      },
      pages: [],
      // Desktop is 3, Mobile is 2.
      videosPerPage: 3,
      /*
      Add video ID's into this array to add a new video to the list.
      List is populated in order.
      Utilizes https://vumbnail.com/ to retrieve video thumbnail automatically.
      Video Thumbnails are cached, so it may take about an hour for it to update appropriately.
      */
      videos: [
        "665012477",
        "695038709",
        "689381466",
        "677883950",
        "727175232/52b9335588",
        "701353823/c2c12a0ebb",
        "699105320/1f8c9bb03d",
        "694973364/1b287ef25d",
      ],
    }
  },

  created() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize);
    }
  },

  methods: {
    buildPages() {
      // If the screen resolution is greater than 1023 we want 3 videosPerPage, else 2.
      this.videosPerPage = this.window.width > 1023 ? 3 : 2;
      let pageCount = 0;
      let contentCount = 0;
      const pages = []
      for (let i = 0; i < this.videos.length; i++) {
        if (contentCount == this.videosPerPage) {
          pageCount += 1;
          contentCount = 0;
        }
        pages[pageCount] = pages[pageCount] || [];
        pages[pageCount].push(i);
        contentCount += 1;
      }
      if (this.pagePos > pages.length - 1) {
        this.pagePos = pages.length - 1;
      }
      this.pages = pages;
    },
    nextVideo() {
      let nextPos = this.pagePos + 1;
      if (nextPos >= this.pages.length) {
        nextPos = 0
      }
      this.pagePos = nextPos;
    },
    selectVideo(index) {
      this.selectedVideo = index;
      // Enables autoplay so the video plays on click.
      this.shouldAutoPlay = true;
    },
    previousVideo() {
      // Sets page pose back.
      let prevPos = this.pagePos - 1;
      if (prevPos < 0) {
        prevPos = this.pages.length - 1;
      }
      this.pagePos = prevPos;
    },
    getVideoSelection() {
      const newSelection = this.pages[this.pagePos];
      return newSelection;
    },
    handleResize() {
      // Rebuilds page array based on new Width/Height.
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.buildPages();
      }, 300)
    }
  }
};
</script>

<style lang="scss" >

#videoSection {
  max-width: 94rem;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
}

.videoBanner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25rem;
  @include desktop {
    height: 50rem;
  }
}

.videoPlayer {
  width: 100%;
  height: 100%;
  border: none;
}

.videoSelectionTitle {
  color: var(--greyText);
  font-size: 2.4rem;
  padding: 2rem 0;
  @include center;
  display: block;
  text-align: center;
}

.videoSelection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;

  .backButton, .forwardButton {
    height: 2rem;
    width: 2rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border-right: 2px solid var(--greyText);
    border-top: 2px solid var(--greyText);
  }

  .forwardButton {
    transform: rotate(45deg);
  }

  .backButton {
    transform: rotate(225deg);
  }

  .videosGallery {
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    min-width: 65%;

    .videoOption {
      margin: 10px 10px;
      width: 224px;
      height: 126px;
      max-width: 224px;
      max-height: 126px;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;
      }
    }

    .videoOption:nth-child(3) {
      display: none;
      @include desktop {
        display: block;
      }
    }
  }

}

.videoGalleryControls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @include center;
}

.sectionRuler {
  border: 1px solid rgba(0,0,0,.2);
  margin-top: 40px;
  margin-bottom: 40px;
}

</style>
