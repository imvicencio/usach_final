class Pokemon {
  constructor(id, name, experience, image, url) {
    this.id = id;
    this.name = name;
    this.experience = experience;
    this.image = image;
    this.url = url;
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
}

export default Pokemon;
