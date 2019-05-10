// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    /**
     * @param  {} {height
     * @param  {} length
     * @param  {} width}
     */
    constructor({height, length, width}){
    this.height = height;
    this.length = length;
    this.width  = width;
    }
    volume() {
        return this.height * this.length * this.width;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
  }
  
  const cuboid = new CuboidMaker({
    height: 5,
    length: 4,
    width:  5
  });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    /**
     * @param  {} {height
     * @param  {} length
     * @param  {} width}
     */
    constructor({height, length, width}){
        //if (height === length && width === length) {super(height, length, width)}
        super({height, length, width});
    }
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 6 * (Math.pow(this.length, 2))
    }
}

const cube = new CubeMaker({
    height: 5,
    length: 5,
    width:  5
  });

  console.log(cube.volume()); // 5^3 = 125
  console.log(cube.surfaceArea()); // 6 * (5^2) = 150