#! /bin/bash
tsc --module amd --target es5 --outDir ./js/ test/playerControlTest.ts
echo "finish!!"
# node test/physical.js
