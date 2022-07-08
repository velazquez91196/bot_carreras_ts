## your-room-script-name
*This servers script allows players to... (your description here)*

<br>
<br>

---

This room script has been coded with:

## [ts-haxball](https://github.com/jakjus/ts-haxball)
TypeScript Template for Haxball Servers.

Code a super-stable Haxball Server and build it in seconds.

### Requirements
- NodeJS
- NPM

### Build and run
1. Fork this repository and clone it
2. Navigate to cloned directory and run `npm install`
3. Code your room in `src/`
4. Build it into browser-ready script with `npm run build`
5. Copy content of `dist/room.js`
6. Paste it into Developer Console at https://haxball.com/headless

![Usage](./usage.svg)

The resulting code in `dist/room.js` has all the features packed and may be also run with other tools, like [Haxroomie](https://github.com/morko/haxroomie).

### Description
Haxball Servers are coded in JavaScript by default. There is an [API documentation](https://github.com/haxball/haxball-issues/wiki/Headless-Host) provided by the game developer.

Currently, Haxball Headless API has typings fully supported in NPM package `@types/haxball-headless-browser`. After installing it the package, TypeScript will apply the definitions for development automatically.

This template makes use of it and provides:
- strongly typed development process
- standard modularity possibilities
- building with `browserify` into production ready script


### Contributions
Feel free to contribute. Please have in mind, that we want to make it to be structured freely by every developer within `src/` folder, so there should be no constraints introduced in this domain.
