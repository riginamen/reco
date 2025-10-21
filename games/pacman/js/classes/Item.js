class Item {
  constructor({ position, imgSrc = './img/sprites/cherry.png' }) {
    this.position = position
    this.radius = 8
    this.image = new Image()
    this.image.src = imgSrc
    this.loaded = false
    this.image.onload = () => {
      this.loaded = true
    }
    const res = JSON.stringify(position, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (value instanceof Array) {
          return value.map(
            (item, index) =>
            (index === value.length - 1 ?
              'circular reference' : item));
        }
        return { ...value, circular: 'circular reference' };
      }
      return value;
    });

    this.center = JSON.parse(res)
    //this.center = JSON.parse(JSON.stringify(position))
    this.radians = 0
  }

  draw() {
    if (!this.loaded) return

    c.drawImage(
      this.image,
      this.position.x - this.image.width / 2,
      this.position.y - this.image.height / 2,
    )

    this.radians += 0.05

    this.position.x = this.center.x + Math.cos(this.radians)
    this.position.y = this.center.y + Math.sin(this.radians)
  }
}
