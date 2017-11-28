<template>
  <div class="h-home">
    <!-- 模拟钟表 -->
    <div class="clock">
      <div :style="clockSec" id="sec"></div>
      <div :style="clockMin" id="min"></div>
      <div :style="clockHour" id="hour"></div>
    </div>
    <div id="renderer" style="width: 100%, height: 800px;"></div>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'home',
  data () {
    return {
      interval: null,
      clockSec: {
        transform: null
      },
      clockMin: {
        transform: null
      },
      clockHour: {
        transform: null
      }
    }
  },

  methods: {
    drawLine () {
      console.log(222)
      let renderer = new THREE.WebGLRenderer({
        antialias: true
      })
      renderer.setSize(1140, 600) // 设置渲染器的大小宽度
      document.getElementById('renderer').appendChild(renderer.domElement)
      // 清除背景颜色
      renderer.setClearColor(0xFFFFFF, 1.0)

      let camera = new THREE.PerspectiveCamera(45, 1140 / 600, 1, 500)
      camera.position.set(0, 0, 100)
      camera.lookAt(new THREE.Vector3(0, 0, 0))

      let scene = new THREE.Scene()

      let geometry = new THREE.Geometry()
      let material = new THREE.LineBasicMaterial({color: 0x0000ff})

      // 线的材质可以由2点的颜色决定
      geometry.vertices.push(new THREE.Vector3(0, 0, 0))
      geometry.vertices.push(new THREE.Vector3(3, 6, 0))
      geometry.vertices.push(new THREE.Vector3(6, 0, 0))
      geometry.vertices.push(new THREE.Vector3(9, 6, 0))
      geometry.vertices.push(new THREE.Vector3(12, 0, 0))

      let line = new THREE.Line(geometry, material)
      scene.add(line)

      renderer.render(scene, camera)
    },

    clockTimer () {
      this.inteval = setInterval(() => {
        let time = new Date()
        let secondRotate = time.getSeconds() * 6 - 90
        let minutesRotate = (time.getMinutes() + time.getSeconds() / 60) * 6 - 90
        let hourRotate = (time.getHours() % 12 + time.getMinutes() / 60 + time.getSeconds() / 3600) * 30 - 90
        this.clockSec.transform = 'rotate(' + secondRotate + 'deg)'
        this.clockMin.transform = 'rotate(' + minutesRotate + 'deg)'
        this.clockHour.transform = 'rotate(' + hourRotate + 'deg)'
      }, 1000)
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.drawLine()
      this.clockTimer()
    })
  },

  destroy () {
    clearInterval(this.interval)
  }
}
</script>

<style>
  .clock {
    position: relative;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    background: url(../../assets/clock.png) no-repeat;
    background-size: 400px;
    z-index: 1;
  }
  .clock div:nth-child(1), .clock div:nth-child(2), .clock div:nth-child(3), .clock div:nth-child(4) {
    position: absolute;
    -webkit-transform-origin: bottom;
  }

  /*秒*/
  .clock div:nth-child(1) {
    top: 194px;
    left: 170px;
    width: 130px;
    height: 15px;
    background: url(../../assets/seds.png) no-repeat;
    transform-origin: 7% 42%;
    z-index: 100;
  }

  /*分*/
  .clock div:nth-child(2) {
    top: 193px;
    left: 170px;
    width: 100px;
    height: 20px;
    z-index: 100;
    background: url(../../assets/mins.png) no-repeat;
    transform-origin: 8% 42%;
  }
  /*时*/
  .clock div:nth-child(3) {
    top: 191px;
    left: 170px;
    width: 100px;
    height: 20px;
    z-index: 100;
    background: url(../../assets/hours.png) no-repeat;
    transform-origin: 8% 42%;
  }

</style>
