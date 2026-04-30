module.exports = {
  title: "Trial Nevrex",
  summary: "MSPFA",

  edit: true,

  trees: {
    './': 'assets://mspfa/Trial Nevrex/',
  },
  async asyncComputed(api) {
    const story = await api.readYamlAsync("./story.yaml")
    return {
      styles: [
        {body: await api.readFileAsync("./adventure.scss")}
      ],
      edit(archive){
        archive.mspfa['Trial Nevrex'] = story
      }
    }
  }
}
