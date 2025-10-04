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
