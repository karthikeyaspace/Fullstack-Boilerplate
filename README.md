## UNDER DEVELOPMENT

TODO - full stack boilerplate - typescript, express, nodejs
fully create boiler plate what i think
ask chatgpt and claude


see examples in github
make changes
verify all packages
test - use ava or jest
push to github


<!-- client -->
charts
hooks



<!-- server -->
check routes and their flow
add mysql 
add groqcloud integration

import z from zod

https://chatgpt.com/c/c66363f1-adf2-411c-8cbe-9dcffea7a766 - still running 


redis
https://sandydev.medium.com/what-is-redis-and-how-to-use-it-with-node-js-b1835c36e3c9

https://github.com/sahat/hackathon-starter

request flow
user sends request
routes -> middleware -> controllers -> services -> res.send

routes - define routes
middleware - check auth, check if user is admin, check if user is valid, cors, etc
controllers - get data from services, send data to services
services - get data from db, send data to controllers 


tests
user.controller.test.ts — Tests for user.controller.ts.
admin.controller.test.ts — Tests for admin.controller.ts.
user.service.test.ts — Tests for userService.ts.
admin.service.test.ts — Tests for adminService.ts.


keep everything seperate for ai - ai.controller, ai.service - since ai login can be complex