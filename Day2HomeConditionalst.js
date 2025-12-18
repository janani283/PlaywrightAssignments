function launchBrowser(browser) {
      if (browser == "Chrome")
            console.log("This is chrome")
      else if (browser == "edge")
            console.log("This is edge")
}
function runTest(testType) {
      switch (testType) {
            case 1: smoke
                  console.log("This is smoke")
            case 2: sanity
                  console.log("This is sanity")
            case 3: regression
                  console.log("This is Regression")
            default:
                  console.log("This is smoke")
      }
}
launchBrowser("edge")
runTest()