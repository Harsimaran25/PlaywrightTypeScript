// to run using node -- give command :
node filename.js

// to run Ts file u need to convert it to JS ,

tsc filename1.ts

above command will create a .js file then you run

node filename1.js

now to run in playwright .spec.ts

1.  npx tsc tests/Test1.spec.ts
    then
2.  npx playwright test OR
    npx playwright test Test1.spec.js

Type script installation notes

first check if already installed --> npx tsc --version OR npx tsc -v OR tsc --version ( global install)

you need to first install typescript before using it

    1) TypeScript as a dev dependency
        npm install -D typescript,

        then to just run:

            npx tsc filename.ts

This will use the local version of tsc from node_modules/.bin.

    2) If you want to use tsc from anywhere without npx, install it globally:
            npm install -g typescript

             to run use -- tsc filename.ts

commit one change
