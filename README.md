# node-tap-vscode-launch-config
Testing VSCode launch config with project which uses node-tap
* Open the project in VSCode
* Run `yarn` or `npm install` to install dependencies
* Open `sum.test.js` and set breakpoint anywhere on the file
* Go to Debug window in VSCode and click on "Run test (current)"

Notice that debugger will not stop at breakpoint as shown in the video below
[![Node Tap breakpoint not stopping in VSCode](https://img.youtube.com/vi/aYUS18rLZck/0.jpg)](https://www.youtube.com/watch?v=aYUS18rLZck)

Update: The solution is pass `"${workspaceFolder}/${relativeFile}"` value to `program` key as defined in [this comment](https://github.com/Microsoft/vscode-recipes/issues/125#issuecomment-419607968)!
