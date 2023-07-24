class Pokemon {
  constructor(id, name, experience, image, url, weight, height, types) {
    this.id = id;
    this.name = name;
    this.experience = experience;
    this.image = image;
    this.url = url;
    this.weight = weight;
    this.height = height;
    this.types = types;
  }

  get getId() {
    return this.id;
  }

  get getUrl() {
    return this.url;
  }

  get getName() {
    return this.name;
  }

  get getExperience() {
    return this.experience;
  }

  get getImage() {
    return this.image;
  }

  get getWeight() {
    return this.weight;
  }

  get getHeight() {
    return this.height;
  }

  get getTypes() {
    return this.types;
  }
}

export default Pokemon;
