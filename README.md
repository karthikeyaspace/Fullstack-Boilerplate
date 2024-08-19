## UNDER DEVELOPMENT

TODO - full stack boilerplate - typescript, express, nodejs
fully create boiler plate what i think
ask chatgpt and claude

add mysql 
add groqcloud integration

see examples in github
make changes
verify all packages
check routes and their flow
test - use ava or jest
push to github



https://chatgpt.com/c/c66363f1-adf2-411c-8cbe-9dcffea7a766 - still running 
https://github.com/karthikeyaspace/CodeWatch/tree/main/server
https://github.com/karthikeyaspace/kv3-backend/blob/main/server/api/libs/supabase.js
https://github.com/karthikeyaspace/research-gpt/blob/master/server/src/services/aiInit.ts



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
