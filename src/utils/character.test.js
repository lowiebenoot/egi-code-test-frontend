import { getName } from "./character"

describe("Character util", () => {
  describe("getName", () => {
    it("should use the actual name if it's available", () => {
      const character = expect(
        getName({
          name: "John Doe",
          aliases: ["Rick Ross", "Foo Bar"],
        })
      ).toEqual("John Doe")
    })

    it("should use the first alias if no name is available", () => {
      expect(
        getName({
          name: "",
          aliases: ["Rick Ross", "Foo Bar"],
        })
      ).toEqual("Rick Ross")

      expect(
        getName({
          name: null,
          aliases: ["Rick Ross", "Foo Bar"],
        })
      ).toEqual("Rick Ross")

      expect(
        getName({
          aliases: ["Rick Ross", "Foo Bar"],
        })
      ).toEqual("Rick Ross")
    })

    it("should use 'Unknown' is no name or aliases are available", () => {
      expect(
        getName({
          name: "",
          aliases: null,
        })
      ).toEqual("Unknown")

      expect(
        getName({
          name: null,
          aliases: [],
        })
      ).toEqual("Unknown")

      expect(getName({})).toEqual("Unknown")
    })
  })
})
