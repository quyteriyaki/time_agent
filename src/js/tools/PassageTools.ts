class PassageTools {
  static GetPassageTag(name: string): Element {
    return document.querySelector(`a[data-passage="${name}"]`)
  }
  
  static AddPassage(name: string, content: any) {
    // Generate data that is shared
    // @ts-ignore: Unreachable code error
    var storyStorage = window.$("tw-storydata")
    // @ts-ignore: Unreachable code error
    var content = window.story.render("Room Render")

    // Figure out if the room already exists in file
    var passagedata = storyStorage.find(`tw-passagedata[name="${name}"]`)
    console.log(passagedata.length)
    if (passagedata.length != 0) {
      // If it does, we need to overwrite it
      console.log("overwrite")
      passagedata.text = content
    } else {
      console.log("new")
      // Generate the tag
      var passage_count = storyStorage.children("tw-passagedata").length
      var data = `<tw-passagedata pid=${passage_count + 1} name="${name}" id="${name}" tags="" position="100,100", size="100,100>${content}</tw-passagedata>`
      storyStorage.append(data)
    }

    // Generate data for memory
    // Iterate over the array of passages
    // @ts-ignore: Unreachable code error
    var results = window.story.passages.filter(o => {
      return o.name == name;
    })

    console.log(`Memory: ${results.length}`)

    if (results.length != 0) {
      var target = results[0]
      target.source = content
    } else {
      var passage = {
        id: passage_count + 1,
        name: name,
        source: content,
        tags: []
      }
      // @ts-ignore: Unreachable code error
      Object.setPrototypeOf(passage, Passage.prototype)
      // @ts-ignore: Unreachable code error
      window.story.passages.push(passage)
    }
  }
}