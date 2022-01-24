

new Vue({
    el: "#mapp",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "AS MY FLAVOUR BLOOMS",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "/PBimages/1. AS MY FLAVOUR BLOOMS .mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          {
            name: "THE PASTEL NOMAD",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "/PBimages/2. THE PASTEL NOMAD.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: true
          },
          {
            name: "INHALE A GIRL",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "/PBimages/3. INHALE A GIRL.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          {
            name: "VALHALLA'S SUSHI CHAMPION",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "PBimages/4. VALHALLA'S SUSHI CHAMPION.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          {
            name: "AN ABRIDGED STORY FOR FLOATING BALLOONS",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "/PBimages/5. AN ABRIDGED STORY FOR FLOATING BALLOONS.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: true
          },
          {
            name: "THE MISSING DONUT TURTLE",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "/PBimages/6. THE MISSING DONUT TURTLE 2.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          {
            name: "RAPHAEL'S INFINITE COOKIE",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "PBimages/7. RAPHAEL'S INFINITE COOKIE.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          {
            name: "GALAPAGOS SWITCH MONKS",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "PBimages/8. GALAPAGOS SWITCH MONKS .mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: true
          },
          {
            name: "THE SMOL LEAF SAGA",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "PBimages/9. THE SMOL LEAF SAGA.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          {
            name: "FEATURE BOY",
            artist: "PASTEL BLOOM",
            cover: "https://f4.bcbits.com/img/a1388550428_16.jpg",
            source: "PBimages/10. FEATURE BOY 2.mp3",
            url: "https://open.spotify.com/album/1f5jXdadznwrMeRYiHpZU1?si=cizNOb67SEyw9E-U4wrOEQ",
            favorited: false
          },
          
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    },
    
    
  });


